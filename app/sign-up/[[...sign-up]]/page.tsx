'use client';

import type { FC } from 'react';
import { useEffect } from 'react';
import { SignUp, useSignUp } from '@clerk/nextjs';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const SignUpPage: FC = () => {
  const { isLoaded } = useSignUp();
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push('/dashboard');
    }
  }, [isLoaded, isSignedIn, router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignUp 
        signInUrl="/sign-in" 
        redirectUrl="/dashboard"
        afterSignUpUrl="/dashboard"
      />
    </div>
  );
};

export default SignUpPage;

// Mark this page as dynamic
export const dynamic = "force-dynamic";
