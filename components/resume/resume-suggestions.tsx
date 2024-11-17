"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

export function ResumeSuggestions() {
  const suggestions = [
    {
      type: "improvement",
      title: "Add more quantifiable achievements",
      description:
        "Include specific metrics and results to demonstrate your impact.",
      priority: "High",
    },
    {
      type: "success",
      title: "Strong action verbs",
      description: "Your use of powerful action verbs effectively showcases your experience.",
      priority: "Success",
    },
    {
      type: "improvement",
      title: "Enhance skills section",
      description:
        "Consider adding more technical skills relevant to your target role.",
      priority: "Medium",
    },
  ];

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Suggestions</h3>
        <Button variant="ghost" size="sm">
          View All
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="space-y-4">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50"
          >
            {suggestion.type === "improvement" ? (
              <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
            ) : (
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
            )}
            <div>
              <div className="flex items-center space-x-2">
                <p className="font-medium">{suggestion.title}</p>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    suggestion.priority === "High"
                      ? "bg-orange-100 text-orange-700"
                      : suggestion.priority === "Success"
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {suggestion.priority}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {suggestion.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}