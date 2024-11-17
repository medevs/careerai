"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

export function JobBoard() {
  const jobs = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "Remote",
      salary: "$120k - $150k",
    },
    {
      title: "Full Stack Engineer",
      company: "InnovateTech",
      location: "Hybrid",
      salary: "$100k - $130k",
    },
    {
      title: "React Developer",
      company: "StartupX",
      location: "Remote",
      salary: "$90k - $120k",
    },
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Recommended Jobs</h3>
        <Briefcase className="h-5 w-5 text-primary" />
      </div>
      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.title}
            className="p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
          >
            <h4 className="font-medium">{job.title}</h4>
            <p className="text-sm text-muted-foreground">{job.company}</p>
            <div className="flex justify-between mt-2">
              <span className="text-sm">{job.location}</span>
              <span className="text-sm font-medium">{job.salary}</span>
            </div>
            <Button className="w-full mt-3" variant="outline">
              Apply Now
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}