import { Card } from '@/components/ui/card';
import { DashboardHeader } from '@/components/dashboard/header';
import { DashboardMetrics } from '@/components/dashboard/metrics';
import { RecentActivity } from '@/components/dashboard/recent-activity';

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <DashboardHeader />
      <DashboardMetrics />
      <RecentActivity />
    </div>
  );
}