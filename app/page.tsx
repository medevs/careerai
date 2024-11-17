import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BrainCircuit, FileText, Compass, Target, Users, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center mb-6 text-primary">
            <BrainCircuit className="h-12 w-12" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Your AI-Powered Career Assistant
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Advance your career with AI-driven resume analysis, personalized job tracking, 
            and expert career guidance all in one platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/sign-up">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/demo">Watch Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to accelerate your career
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FileText className="h-6 w-6" />}
              title="Resume Analysis"
              description="Get instant feedback on your resume with AI-powered analysis and scoring."
            />
            <FeatureCard
              icon={<Compass className="h-6 w-6" />}
              title="Career Path Planning"
              description="Discover personalized career paths based on your skills and interests."
            />
            <FeatureCard
              icon={<Target className="h-6 w-6" />}
              title="Job Application Tracking"
              description="Stay organized with our comprehensive job application management system."
            />
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="Networking & Mentorship"
              description="Connect with industry professionals and find mentors in your field."
            />
            <FeatureCard
              icon={<BookOpen className="h-6 w-6" />}
              title="Resource Library"
              description="Access curated resources, templates, and guides for career development."
            />
            <Card className="p-6 flex items-center justify-center bg-primary/5 border-primary/10">
              <div className="text-center">
                <p className="font-semibold mb-2">More Features Coming Soon</p>
                <p className="text-sm text-muted-foreground">
                  We're constantly adding new features to help you succeed
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">
            Ready to take your career to the next level?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of professionals who are already using Career AI to achieve their career goals.
          </p>
          <Button size="lg" asChild>
            <Link href="/sign-up">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) {
  return (
    <Card className="p-6">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}