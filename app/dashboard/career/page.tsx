import { CareerAssessment } from '@/components/career/career-assessment';
import { CareerPath } from '@/components/career/career-path';
import { SkillsGap } from '@/components/career/skills-gap';
import { MarketTrends } from '@/components/career/market-trends';

export default function CareerPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Career Path</h2>
          <p className="text-muted-foreground">
            Discover and plan your ideal career journey.
          </p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <CareerAssessment />
        <CareerPath />
      </div>
      <SkillsGap />
      <MarketTrends />
    </div>
  );
}