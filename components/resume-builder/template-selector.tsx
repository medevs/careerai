"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ResumeTemplateSelectorProps {
  value: string;
  onChange: (template: string) => void;
}

const templates = [
  {
    id: "modern",
    name: "Modern",
    description: "Clean and professional design with a modern touch",
  },
  {
    id: "classic",
    name: "Classic",
    description: "Traditional resume layout that never goes out of style",
  },
  {
    id: "creative",
    name: "Creative",
    description: "Stand out with a unique and eye-catching design",
  },
];

export function ResumeTemplateSelector({
  value,
  onChange,
}: ResumeTemplateSelectorProps) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Choose Template</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((template) => (
          <Button
            key={template.id}
            variant="outline"
            className={cn(
              "h-auto w-full flex flex-col items-start p-4 space-y-1.5 text-left overflow-hidden",
              value === template.id && "border-primary"
            )}
            onClick={() => onChange(template.id)}
          >
            <span className="font-medium text-base truncate w-full">{template.name}</span>
            <span className="text-sm text-muted-foreground line-clamp-2 w-full">
              {template.description}
            </span>
          </Button>
        ))}
      </div>
    </Card>
  );
}