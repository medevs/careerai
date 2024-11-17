import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

export function DashboardHeader() {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your career progress.
        </p>
      </div>
      <Button>
        <Upload className="mr-2 h-4 w-4" />
        Upload Resume
      </Button>
    </div>
  );
}