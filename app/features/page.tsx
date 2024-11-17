import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Compass,
  Target,
  Users,
  BookOpen,
  BrainCircuit,
  ArrowRight,
  Check,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: FileText,
    title: "AI-Powered Resume Analysis",
    description: "Get instant feedback on your resume with our advanced AI analysis system.",
    benefits: [
      "Detailed scoring and feedback",
      "Industry-specific recommendations",
      "ATS compatibility check",
      "Keyword optimization",
    ],
  },
  {
    icon: Compass,
    title: "Career Path Planning",
    description: "Map out your career journey with personalized recommendations and insights.",
    benefits: [
      "Skill gap analysis",
      "Industry trend insights",
      "Personalized learning paths",
      "Career progression mapping",
    ],
  },
  {
    icon: Target,
    title: "Job Application Tracking",
    description: "Stay organized with our comprehensive application management system.",
    benefits: [
      "Centralized application dashboard",
      "Status tracking and reminders",
      "Interview scheduling",
      "Follow-up management",
    ],
  },
  {
    icon: Users,
    title: "Networking & Mentorship",
    description: "Connect with industry professionals and find mentors in your field.",
    benefits: [
      "Mentor matching system",
      "Virtual networking events",
      "Professional community access",
      "Industry expert sessions",
    ],
  },
  {
    icon: BookOpen,
    title: "Resource Library",
    description: "Access a vast collection of career development resources and templates.",
    benefits: [
      "Interview preparation guides",
      "Resume templates",
      "Industry insights",
      "Skill development resources",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI Career Assistant",
    description: "Get personalized career guidance powered by advanced AI technology.",
    benefits: [
      "24/7 career guidance",
      "Custom action plans",
      "Performance analytics",
      "Goal tracking",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Powerful Features to Accelerate Your Career
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover all the tools and resources designed to help you achieve your career goals
          </p>
          <Button size="lg" asChild>
            <Link href="/sign-up">Get Started</Link>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6">
                <div className="mb-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Take Your Career to the Next Level?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of professionals who are already using Career AI to achieve their career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/sign-up">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}