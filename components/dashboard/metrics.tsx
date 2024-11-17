import { Card } from '@/components/ui/card';
import { Target, FileText, Users, Briefcase } from 'lucide-react';

const metrics = [
  {
    label: 'Resume Score',
    value: '85/100',
    change: '+5',
    icon: FileText,
  },
  {
    label: 'Applications',
    value: '12',
    change: '+3',
    icon: Target,
  },
  {
    label: 'Interviews',
    value: '4',
    change: '+2',
    icon: Users,
  },
  {
    label: 'Job Matches',
    value: '24',
    change: '+8',
    icon: Briefcase,
  },
];

export function DashboardMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.label} className="p-4">
          <div className="flex items-center justify-between space-x-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                {metric.label}
              </p>
              <div className="flex items-center">
                <h3 className="text-2xl font-bold">{metric.value}</h3>
                {metric.change && (
                  <span className="ml-2 text-sm text-green-500">
                    {metric.change}
                  </span>
                )}
              </div>
            </div>
            <metric.icon className="h-8 w-8 text-muted-foreground" />
          </div>
        </Card>
      ))}
    </div>
  );
}