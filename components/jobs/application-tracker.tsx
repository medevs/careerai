"use client";

import { Card } from "@/components/ui/card";
import { Target, Clock, CheckCircle, XCircle } from "lucide-react";

export function ApplicationTracker() {
  const applications = [
    {
      company: "TechCorp",
      role: "Senior Frontend Developer",
      status: "Interview",
      date: "2024-03-15",
    },
    {
      company: "InnovateTech",
      role: "Full Stack Engineer",
      status: "Applied",
      date: "2024-03-10",
    },
    {
      company: "StartupX",
      role: "React Developer",
      status: "Rejected",
      date: "2024-03-05",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Interview":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "Applied":
        return <Target className="h-4 w-4 text-blue-500" />;
      case "Accepted":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "Rejected":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Application Tracker</h3>
        <Target className="h-5 w-5 text-primary" />
      </div>
      <div className="space-y-4">
        {applications.map((app) => (
          <div
            key={`${app.company}-${app.role}`}
            className="flex items-center justify-between p-4 rounded-lg border bg-card"
          >
            <div>
              <p className="font-medium">{app.company}</p>
              <p className="text-sm text-muted-foreground">{app.role}</p>
            </div>
            <div className="flex items-center space-x-2">
              {getStatusIcon(app.status)}
              <span className="text-sm">{app.status}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}