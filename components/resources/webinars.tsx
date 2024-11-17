"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Calendar } from "lucide-react";

export function Webinars() {
  const webinars = [
    {
      title: "Mastering Technical Interviews",
      speaker: "John Doe",
      date: "March 25, 2024",
      time: "2:00 PM EST",
    },
    {
      title: "Career Transition Strategies",
      speaker: "Jane Smith",
      date: "March 28, 2024",
      time: "1:00 PM EST",
    },
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Upcoming Webinars</h3>
        <Video className="h-5 w-5 text-primary" />
      </div>
      <div className="space-y-4">
        {webinars.map((webinar) => (
          <div
            key={webinar.title}
            className="p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
          >
            <h4 className="font-medium">{webinar.title}</h4>
            <p className="text-sm text-muted-foreground">
              Presented by {webinar.speaker}
            </p>
            <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {webinar.date}
              </div>
              <div>{webinar.time}</div>
            </div>
            <div className="flex space-x-2 mt-3">
              <Button>Register Now</Button>
              <Button variant="outline">Add to Calendar</Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}