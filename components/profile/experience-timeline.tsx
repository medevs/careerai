"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Briefcase } from "lucide-react";
import { Experience } from "@/lib/types";
import { ExperienceForm } from "./experience-form";
import { useState } from "react";

interface ExperienceTimelineProps {
  experience: Experience[];
  onUpdate: (experience: Experience[]) => void;
}

export function ExperienceTimeline({ experience, onUpdate }: ExperienceTimelineProps) {
  const [isAdding, setIsAdding] = useState(false);

  const sortedExperience = [...experience].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Work Experience</h3>
        <Button variant="outline" onClick={() => setIsAdding(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Experience
        </Button>
      </div>

      {isAdding && (
        <div className="mb-6">
          <ExperienceForm
            onSubmit={(newExp) => {
              onUpdate([...experience, newExp]);
              setIsAdding(false);
            }}
            onCancel={() => setIsAdding(false)}
          />
        </div>
      )}

      <div className="space-y-6">
        {sortedExperience.map((exp) => (
          <div key={exp.id} className="relative pl-6 pb-6 border-l-2 border-muted last:pb-0">
            <div className="absolute -left-[9px] p-1 bg-background border-2 border-muted rounded-full">
              <Briefcase className="h-4 w-4" />
            </div>
            <div className="space-y-1">
              <h4 className="font-medium">{exp.title}</h4>
              <p className="text-sm text-muted-foreground">{exp.company}</p>
              <p className="text-sm text-muted-foreground">
                {new Date(exp.startDate).toLocaleDateString()} -{" "}
                {exp.current ? "Present" : new Date(exp.endDate!).toLocaleDateString()}
              </p>
              <p className="text-sm mt-2">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}