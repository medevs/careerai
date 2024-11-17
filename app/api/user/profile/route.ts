import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import { prisma } from '@/lib/prisma';
import type { ApiResponse, UserProfile } from '@/lib/api-types';

export async function GET() {
  try {
    const { userId } = auth();
    
    if (!userId) {
      return NextResponse.json<ApiResponse>({
        success: false,
        error: 'Unauthorized'
      }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: {
        clerkId: userId
      }
    });

    if (!user) {
      return NextResponse.json<ApiResponse>({
        success: false,
        error: 'User not found'
      }, { status: 404 });
    }

    const profile: UserProfile = {
      id: user.id,
      email: user.email,
      firstName: user.firstName || undefined,
      lastName: user.lastName || undefined,
      headline: user.headline || undefined,
      bio: user.bio || undefined,
      location: user.location || undefined,
      website: user.website || undefined,
      currentTitle: user.currentTitle || undefined,
      currentCompany: user.currentCompany || undefined,
      yearsOfExperience: user.yearsOfExperience || undefined,
    };

    return NextResponse.json<ApiResponse<UserProfile>>({
      success: true,
      data: profile
    });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return NextResponse.json<ApiResponse>({
      success: false,
      error: 'Internal server error'
    }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { userId } = auth();
    
    if (!userId) {
      return NextResponse.json<ApiResponse>({
        success: false,
        error: 'Unauthorized'
      }, { status: 401 });
    }

    const body = await request.json();

    const updatedUser = await prisma.user.update({
      where: {
        clerkId: userId
      },
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        headline: body.headline,
        bio: body.bio,
        location: body.location,
        website: body.website,
        currentTitle: body.currentTitle,
        currentCompany: body.currentCompany,
        yearsOfExperience: body.yearsOfExperience,
      }
    });

    const profile: UserProfile = {
      id: updatedUser.id,
      email: updatedUser.email,
      firstName: updatedUser.firstName || undefined,
      lastName: updatedUser.lastName || undefined,
      headline: updatedUser.headline || undefined,
      bio: updatedUser.bio || undefined,
      location: updatedUser.location || undefined,
      website: updatedUser.website || undefined,
      currentTitle: updatedUser.currentTitle || undefined,
      currentCompany: updatedUser.currentCompany || undefined,
      yearsOfExperience: updatedUser.yearsOfExperience || undefined,
    };

    return NextResponse.json<ApiResponse<UserProfile>>({
      success: true,
      data: profile
    });
  } catch (error) {
    console.error('Error updating user profile:', error);
    return NextResponse.json<ApiResponse>({
      success: false,
      error: 'Internal server error'
    }, { status: 500 });
  }
}
