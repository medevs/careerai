"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

export function CareerAssessment() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Career Assessment</h3>
        <Brain className="h-5 w-5 text-primary" />
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Take our comprehensive assessment to discover career paths that match your skills and interests.
      </p>
      <Button className="w-full">Start Assessment</Button>
    </Card>
  );
}