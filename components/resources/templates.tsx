"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

export function Templates() {
  const templates = [
    {
      title: "Modern Resume Template",
      type: "Resume",
      downloads: "2.5k",
    },
    {
      title: "Cover Letter Template",
      type: "Cover Letter",
      downloads: "1.8k",
    },
    {
      title: "Thank You Email Template",
      type: "Email",
      downloads: "1.2k",
    },
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Templates</h3>
        <FileText className="h-5 w-5 text-primary" />
      </div>
      <div className="space-y-4">
        {templates.map((template) => (
          <div
            key={template.title}
            className="p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-medium">{template.title}</h4>
                <p className="text-sm text-muted-foreground">{template.type}</p>
              </div>
              <span className="text-sm text-muted-foreground">
                {template.downloads} downloads
              </span>
            </div>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}