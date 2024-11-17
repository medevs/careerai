"use client";

import { Card } from "@/components/ui/card";
import { ResumeData } from "@/lib/resume-builder-types";
import { ModernTemplate } from "./templates/modern-template";
import { ClassicTemplate } from "./templates/classic-template";
import { CreativeTemplate } from "./templates/creative-template";

interface ResumePreviewProps {
  data: ResumeData;
  template: string;
}

export function ResumePreview({ data, template }: ResumePreviewProps) {
  const getTemplate = () => {
    switch (template) {
      case "modern":
        return <ModernTemplate data={data} />;
      case "classic":
        return <ClassicTemplate data={data} />;
      case "creative":
        return <CreativeTemplate data={data} />;
      default:
        return <ModernTemplate data={data} />;
    }
  };

  return (
    <Card className="p-6 bg-white">
      <div className="aspect-[1/1.4142] bg-white shadow-sm border rounded-md overflow-hidden">
        <div className="w-full h-full p-8 scale-[0.75] origin-top-left">
          {getTemplate()}
        </div>
      </div>
    </Card>
  );
}