"use client";

import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

export function ResumeScore() {
  const score = 85;
  const maxScore = 100;

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Resume Score</h3>
        <Award className="h-5 w-5 text-primary" />
      </div>
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="hsl(var(--muted))"
              strokeWidth="3"
            />
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              strokeDasharray={`${(score / maxScore) * 100}, 100`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="text-3xl font-bold">{score}</span>
              <span className="text-sm text-muted-foreground">/{maxScore}</span>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Your resume is performing well! A few tweaks could make it even better.
        </p>
      </div>
    </Card>
  );
}