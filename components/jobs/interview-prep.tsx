"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

export function InterviewPrep() {
  const interviews = [
    {
      company: "TechCorp",
      type: "Technical Interview",
      date: "2024-03-20",
      time: "2:00 PM",
      status: "Upcoming",
    },
    {
      company: "InnovateTech",
      type: "System Design",
      date: "2024-03-25",
      time: "11:00 AM",
      status: "Scheduled",
    },
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Interview Preparation</h3>
        <Users className="h-5 w-5 text-primary" />
      </div>
      <div className="space-y-4">
        {interviews.map((interview) => (
          <div
            key={`${interview.company}-${interview.type}`}
            className="p-4 rounded-lg border bg-card"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-medium">{interview.company}</h4>
                <p className="text-sm text-muted-foreground">{interview.type}</p>
              </div>
              <span className="text-sm font-medium text-primary">
                {interview.status}
              </span>
            </div>
            <p className="text-sm">
              {interview.date} at {interview.time}
            </p>
            <div className="flex space-x-2 mt-3">
              <Button variant="outline" size="sm">
                Practice Questions
              </Button>
              <Button variant="outline" size="sm">
                Review Materials
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}