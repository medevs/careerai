"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BrainCircuit, Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const routes = [
  {
    label: 'Features',
    href: '/features',
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'Resources',
    href: '/resources',
  },
];

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <BrainCircuit className="h-6 w-6" />
          <span className="text-xl font-bold">Career AI</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex ml-auto items-center space-x-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-sm font-medium hover:text-primary"
            >
              {route.label}
            </Link>
          ))}
          <ThemeToggle />
          
          <SignedIn>
            <Button variant="outline" size="sm" asChild className="animate-in fade-in-0 duration-500">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          
          <SignedOut>
            <Button variant="outline" size="sm" asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </SignedOut>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="text-sm font-medium hover:text-primary"
                  >
                    {route.label}
                  </Link>
                ))}
                <SignedIn>
                  <Button variant="outline" size="sm" asChild className="w-full animate-in fade-in-0 duration-500">
                    <Link href="/dashboard">Dashboard</Link>
                  </Button>
                  <div className="flex justify-center">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </SignedIn>
                
                <SignedOut>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href="/sign-in">Sign In</Link>
                  </Button>
                  <Button size="sm" asChild className="w-full">
                    <Link href="/sign-up">Sign Up</Link>
                  </Button>
                </SignedOut>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}