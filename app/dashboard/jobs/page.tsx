import { JobBoard } from '@/components/jobs/job-board';
import { ApplicationTracker } from '@/components/jobs/application-tracker';
import { InterviewPrep } from '@/components/jobs/interview-prep';
import { JobStats } from '@/components/jobs/job-stats';

export default function JobsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Job Applications</h2>
          <p className="text-muted-foreground">
            Track and manage your job applications in one place.
          </p>
        </div>
      </div>
      <JobStats />
      <div className="grid gap-6 md:grid-cols-2">
        <JobBoard />
        <ApplicationTracker />
      </div>
      <InterviewPrep />
    </div>
  );
}