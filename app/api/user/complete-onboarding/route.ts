import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const formData = await req.formData();
    const skills = JSON.parse(formData.get("skills") as string);
    const jobTitles = JSON.parse(formData.get("jobTitles") as string);
    const resumeFile = formData.get("resume") as File;

    // Store resume file (implement your file storage logic here)
    let resumeUrl = null;
    if (resumeFile) {
      // Example: Upload to cloud storage
      // resumeUrl = await uploadToStorage(resumeFile);
    }

    // Update user profile in database
    await prisma.user.update({
      where: { clerkId: userId },
      data: {
        hasCompletedOnboarding: true,
        skills: skills,
        interestedJobTitles: jobTitles,
        resumeUrl: resumeUrl,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[ONBOARDING_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
