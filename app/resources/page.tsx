import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Video,
  FileText,
  Users,
  ArrowRight,
  PlayCircle,
  Download,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "Learning Paths",
    icon: BookOpen,
    description: "Structured learning paths for different career trajectories",
    items: [
      "Frontend Development Path",
      "Backend Engineering Path",
      "DevOps Specialist Path",
      "Cloud Architecture Path",
    ],
  },
  {
    title: "Video Tutorials",
    icon: Video,
    description: "In-depth video tutorials from industry experts",
    items: [
      "System Design Fundamentals",
      "Data Structures & Algorithms",
      "Cloud Computing Basics",
      "Agile Development Practices",
    ],
  },
  {
    title: "Templates & Guides",
    icon: FileText,
    description: "Professional templates and comprehensive guides",
    items: [
      "Resume Templates",
      "Cover Letter Examples",
      "Portfolio Guidelines",
      "Interview Preparation Guide",
    ],
  },
  {
    title: "Community",
    icon: Users,
    description: "Connect with peers and industry professionals",
    items: [
      "Discussion Forums",
      "Mentorship Program",
      "Career Success Stories",
      "Networking Events",
    ],
  },
];

const featuredWebinars = [
  {
    title: "Mastering System Design Interviews",
    presenter: "Alex Chen",
    role: "Senior System Architect",
    date: "March 25, 2024",
    time: "2:00 PM EST",
    attendees: 1250,
  },
  {
    title: "Career Transition Success Stories",
    presenter: "Sarah Johnson",
    role: "Career Coach",
    date: "March 28, 2024",
    time: "1:00 PM EST",
    attendees: 850,
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Career Development Resources
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Access a comprehensive library of resources to accelerate your career growth
          </p>
          <Button size="lg" asChild>
            <Link href="/sign-up">Access All Resources</Link>
          </Button>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <Card key={category.title} className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center text-sm">
                      <ArrowRight className="h-4 w-4 text-primary mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/resources/${category.title.toLowerCase()}`}>
                    Explore {category.title}
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Webinars */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Webinars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredWebinars.map((webinar) => (
              <Card key={webinar.title} className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <PlayCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{webinar.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      with {webinar.presenter} • {webinar.role}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <span className="mr-4">{webinar.date}</span>
                      <span>{webinar.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      {webinar.attendees} registered
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-4">Register Now</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Stats */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Download className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">1000+</h3>
              <p className="text-sm text-muted-foreground">
                Downloadable Resources
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Video className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-sm text-muted-foreground">
                Video Tutorials
              </p>
            </Card>
            <Card className="p-6 text-center">
              <MessageSquare className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">50k+</h3>
              <p className="text-sm text-muted-foreground">
                Community Members
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get unlimited access to all resources and join our community of professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/sign-up">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">View Plans</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}