"use client";

import { Card } from "@/components/ui/card";
import { Compass } from "lucide-react";

export function CareerPath() {
  const careerSteps = [
    { title: "Current: Software Developer", timeline: "Present" },
    { title: "Next: Senior Developer", timeline: "1-2 years" },
    { title: "Future: Tech Lead", timeline: "3-5 years" },
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Your Career Path</h3>
        <Compass className="h-5 w-5 text-primary" />
      </div>
      <div className="space-y-4">
        {careerSteps.map((step, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div>
              <p className="font-medium">{step.title}</p>
              <p className="text-sm text-muted-foreground">{step.timeline}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}