import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your webhook secret
  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET || '');

  let evt: WebhookEvent;

  // Verify the webhook
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400
    });
  }

  // Handle the webhook
  const eventType = evt.type;

  if (eventType === 'user.created') {
    const { id, email_addresses, first_name, last_name } = evt.data;
    const primaryEmail = email_addresses[0]?.email_address;

    if (!primaryEmail) {
      return new Response('No email address found', {
        status: 400
      });
    }

    try {
      const user = await prisma.user.create({
        data: {
          clerkId: id,
          email: primaryEmail,
          firstName: first_name || null,
          lastName: last_name || null,
        },
      });

      return NextResponse.json({ success: true, data: user });
    } catch (error) {
      console.error('Error creating user:', error);
      return new Response('Error creating user', {
        status: 500
      });
    }
  }

  if (eventType === 'user.updated') {
    const { id, email_addresses, first_name, last_name } = evt.data;
    const primaryEmail = email_addresses[0]?.email_address;

    if (!primaryEmail) {
      return new Response('No email address found', {
        status: 400
      });
    }

    try {
      const user = await prisma.user.update({
        where: { clerkId: id },
        data: {
          email: primaryEmail,
          firstName: first_name || null,
          lastName: last_name || null,
        },
      });

      return NextResponse.json({ success: true, data: user });
    } catch (error) {
      console.error('Error updating user:', error);
      return new Response('Error updating user', {
        status: 500
      });
    }
  }

  if (eventType === 'user.deleted') {
    const { id } = evt.data;

    try {
      await prisma.user.delete({
        where: { clerkId: id },
      });

      return NextResponse.json({ success: true });
    } catch (error) {
      console.error('Error deleting user:', error);
      return new Response('Error deleting user', {
        status: 500
      });
    }
  }

  return new Response('', { status: 200 });
}
