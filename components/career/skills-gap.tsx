"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code2 } from "lucide-react";

export function SkillsGap() {
  const skills = [
    { name: "React", current: 80, required: 90 },
    { name: "Node.js", current: 70, required: 85 },
    { name: "System Design", current: 60, required: 80 },
    { name: "Team Leadership", current: 65, required: 85 },
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Skills Gap Analysis</h3>
        <Code2 className="h-5 w-5 text-primary" />
      </div>
      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-sm text-muted-foreground">
                {skill.current}% / {skill.required}%
              </span>
            </div>
            <Progress value={skill.current} className="h-2" />
          </div>
        ))}
      </div>
    </Card>
  );
}