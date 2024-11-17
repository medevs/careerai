import { Card } from '@/components/ui/card';
import { FileText, Target, Users, Calendar } from 'lucide-react';

const activities = [
  {
    icon: FileText,
    title: 'Resume Updated',
    description: 'Your resume was analyzed and scored',
    timestamp: '2 hours ago',
  },
  {
    icon: Target,
    title: 'Application Submitted',
    description: 'Applied to Senior Developer at TechCorp',
    timestamp: '5 hours ago',
  },
  {
    icon: Users,
    title: 'Interview Scheduled',
    description: 'Technical interview with InnovateTech',
    timestamp: '1 day ago',
  },
  {
    icon: Calendar,
    title: 'Career Path Updated',
    description: 'New skills recommended for your path',
    timestamp: '2 days ago',
  },
];

export function RecentActivity() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-3 rounded-lg hover:bg-muted/50"
          >
            <div className="p-2 rounded-full bg-primary/10">
              <activity.icon className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium">{activity.title}</p>
              <p className="text-sm text-muted-foreground">
                {activity.description}
              </p>
            </div>
            <p className="text-sm text-muted-foreground">{activity.timestamp}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}