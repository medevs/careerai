'use client';

import type { FC } from 'react';
import { useEffect } from 'react';
import { SignIn, useSignIn } from '@clerk/nextjs';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const SignInPage: FC = () => {
  const { isLoaded } = useSignIn();
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push('/dashboard');
    }
  }, [isLoaded, isSignedIn, router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn 
        signUpUrl="/sign-up" 
        redirectUrl="/dashboard" 
        afterSignInUrl="/dashboard"
      />
    </div>
  );
};

export default SignInPage;
