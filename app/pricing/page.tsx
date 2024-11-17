import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for exploring career opportunities",
    features: [
      "Basic resume analysis",
      "Job application tracker",
      "Limited resource access",
      "Community forum access",
      "Email support",
    ],
    cta: "Get Started",
    href: "/sign-up",
    popular: false,
  },
  {
    name: "Professional",
    price: "$29",
    description: "Ideal for active job seekers",
    features: [
      "Advanced AI resume analysis",
      "Unlimited job applications",
      "Full resource library access",
      "Career path planning",
      "Priority email support",
      "Interview preparation tools",
      "1 mock interview session",
    ],
    cta: "Start Free Trial",
    href: "/sign-up",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "Best for career advancement",
    features: [
      "Everything in Professional",
      "Personal career coach",
      "Custom learning paths",
      "Unlimited mock interviews",
      "Priority support 24/7",
      "Resume writing service",
      "LinkedIn profile optimization",
      "Salary negotiation guidance",
    ],
    cta: "Contact Sales",
    href: "/contact",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Choose the perfect plan for your career goals
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`p-6 flex flex-col ${
                  plan.popular
                    ? "border-primary shadow-lg scale-105"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="px-3 py-1 text-sm text-primary bg-primary/10 rounded-full w-fit mb-4">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-2 mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Free" && (
                      <span className="text-muted-foreground">/month</span>
                    )}
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">
                Can I switch plans later?
              </h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. Changes
                will be reflected in your next billing cycle.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">
                What&apos;s included in the free trial?
              </h3>
              <p className="text-muted-foreground">
                The 14-day free trial includes all features of the Professional
                plan, allowing you to fully experience our platform before
                committing.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">
                Do you offer refunds?
              </h3>
              <p className="text-muted-foreground">
                We offer a 30-day money-back guarantee if you&apos;re not
                satisfied with our service.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">
            Start Your Career Journey Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of professionals who are already using Career AI to
            achieve their career goals.
          </p>
          <Button size="lg" asChild>
            <Link href="/sign-up">Start Free Trial</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}