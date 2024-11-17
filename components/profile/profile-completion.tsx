"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { UserProfile } from "@/lib/types";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface ProfileCompletionProps {
  profile: UserProfile;
}

export function ProfileCompletion({ profile }: ProfileCompletionProps) {
  const sections = [
    { name: "Basic Info", complete: !!profile.name && !!profile.email },
    { name: "Professional Info", complete: !!profile.title && !!profile.bio },
    { name: "Skills", complete: profile.skills.length > 0 },
    { name: "Experience", complete: profile.experience.length > 0 },
    { name: "Education", complete: profile.education.length > 0 },
  ];

  const completedSections = sections.filter(s => s.complete).length;
  const completionPercentage = (completedSections / sections.length) * 100;

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Profile Completion</h3>
        <span className="text-2xl font-bold">{Math.round(completionPercentage)}%</span>
      </div>
      <Progress value={completionPercentage} className="h-2 mb-6" />
      <div className="space-y-3">
        {sections.map((section) => (
          <div key={section.name} className="flex items-center justify-between">
            <span className="text-sm">{section.name}</span>
            {section.complete ? (
              <CheckCircle2 className="h-4 w-4 text-green-500" />
            ) : (
              <AlertCircle className="h-4 w-4 text-orange-500" />
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}