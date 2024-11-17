import { ResourceLibrary } from '@/components/resources/resource-library';
import { Templates } from '@/components/resources/templates';
import { Webinars } from '@/components/resources/webinars';
import { Community } from '@/components/resources/community';

export default function ResourcesPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Resources</h2>
          <p className="text-muted-foreground">
            Access career development resources and templates.
          </p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <ResourceLibrary />
        <Templates />
      </div>
      <Webinars />
      <Community />
    </div>
  );
}