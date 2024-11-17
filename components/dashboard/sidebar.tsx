import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import {
  FileText,
  Compass,
  Target,
  BookOpen,
  Settings,
  LayoutDashboard,
  FileEdit,
} from 'lucide-react';

const routes = [
  {
    label: 'Overview',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: 'Resume Analysis',
    icon: FileText,
    href: '/dashboard/resume',
    color: 'text-violet-500',
  },
  {
    label: 'Resume Builder',
    icon: FileEdit,
    href: '/dashboard/resume-builder',
    color: 'text-pink-500',
  },
  {
    label: 'Career Path',
    icon: Compass,
    href: '/dashboard/career',
    color: 'text-orange-500',
  },
  {
    label: 'Job Tracker',
    icon: Target,
    href: '/dashboard/jobs',
    color: 'text-emerald-500',
  },
  {
    label: 'Resources',
    icon: BookOpen,
    href: '/dashboard/resources',
    color: 'text-blue-500',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/dashboard/settings',
  },
];

export function Sidebar() {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-background border-r">
      <div className="px-3 py-2 flex-1">
        <div className="flex items-center justify-between pl-3 mb-14">
          <Link href="/dashboard">
            <h1 className="text-xl font-bold">Career AI</h1>
          </Link>
        </div>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-primary/10 rounded-lg transition',
                route.color
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn('h-5 w-5 mr-3')} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}