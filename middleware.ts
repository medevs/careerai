import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import prisma from "@/lib/prisma";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  afterAuth: async (auth, req) => {
    if (!auth.userId) {
      return;
    }

    // Skip onboarding check for these paths
    const isOnboarding = req.nextUrl.pathname === "/onboarding";
    const isApi = req.nextUrl.pathname.startsWith("/api");
    if (isOnboarding || isApi) {
      return;
    }

    try {
      // Check if user has completed onboarding
      const user = await prisma.user.findUnique({
        where: { clerkId: auth.userId },
        select: { hasCompletedOnboarding: true },
      });

      if (!user?.hasCompletedOnboarding) {
        const onboardingUrl = new URL("/onboarding", req.url);
        return NextResponse.redirect(onboardingUrl);
      }
    } catch (error) {
      console.error("[MIDDLEWARE_ERROR]", error);
    }
  },
  publicRoutes: ["/", "/sign-in", "/sign-up"],
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
