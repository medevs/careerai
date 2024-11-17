"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function ResumeAnalysis() {
  const categories = [
    { name: "Professional Experience", score: 85 },
    { name: "Education", score: 90 },
    { name: "Skills & Technologies", score: 75 },
    { name: "Achievements", score: 70 },
    { name: "Overall Format", score: 80 },
  ];

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">Detailed Analysis</h3>
      <div className="space-y-6">
        {categories.map((category) => (
          <div key={category.name}>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">{category.name}</span>
              <span className="text-sm text-muted-foreground">
                {category.score}/100
              </span>
            </div>
            <Progress value={category.score} className="h-2" />
          </div>
        ))}
      </div>
    </Card>
  );
}