import { Sidebar } from '@/components/dashboard/sidebar';
import { MobileSidebar } from '@/components/dashboard/mobile-sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-screen">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-background">
        <Sidebar />
      </div>
      <main className="md:pl-72">
        <div className="flex items-center p-4 md:hidden">
          <MobileSidebar />
        </div>
        {children}
      </main>
    </div>
  );
}