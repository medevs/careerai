"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";

export function ResourceLibrary() {
  const resources = [
    {
      title: "Interview Preparation Guide",
      type: "Guide",
      category: "Interviews",
    },
    {
      title: "System Design Fundamentals",
      type: "Course",
      category: "Technical",
    },
    {
      title: "Negotiation Strategies",
      type: "Workshop",
      category: "Career",
    },
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Learning Resources</h3>
        <BookOpen className="h-5 w-5 text-primary" />
      </div>
      <div className="space-y-4">
        {resources.map((resource) => (
          <div
            key={resource.title}
            className="p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">{resource.title}</h4>
                <p className="text-sm text-muted-foreground">{resource.type}</p>
              </div>
              <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                {resource.category}
              </span>
            </div>
            <Button variant="ghost" size="sm" className="mt-2">
              Access Resource
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}