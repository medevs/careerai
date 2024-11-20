import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { ClerkProvider } from '@clerk/nextjs';

const Navbar = dynamic(() => import('@/components/navbar'), {
  ssr: true,
  loading: () => (
    <div className="h-16 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <div className="h-6 w-24 bg-muted animate-pulse rounded" />
      </div>
    </div>
  ),
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Career AI - Your AI-Powered Career Assistant',
  description: 'Advance your career with AI-powered resume analysis, job tracking, and personalized career guidance.',
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen bg-background">
              <Suspense fallback={
                <div className="h-16 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                  <div className="flex h-16 items-center px-4 container mx-auto">
                    <div className="h-6 w-24 bg-muted animate-pulse rounded" />
                  </div>
                </div>
              }>
                <Navbar />
              </Suspense>
              <main>{children}</main>
              <Toaster />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}