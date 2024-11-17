"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare } from "lucide-react";

export function Community() {
  const discussions = [
    {
      title: "Tips for Remote Job Search",
      author: "Sarah Johnson",
      replies: 15,
      category: "Job Search",
    },
    {
      title: "Switching from Backend to Frontend",
      author: "Mike Chen",
      replies: 23,
      category: "Career Change",
    },
    {
      title: "Salary Negotiation Experiences",
      author: "Alex Thompson",
      replies: 45,
      category: "Negotiation",
    },
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Community Discussions</h3>
        <Users className="h-5 w-5 text-primary" />
      </div>
      <div className="space-y-4">
        {discussions.map((discussion) => (
          <div
            key={discussion.title}
            className="p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-medium">{discussion.title}</h4>
                <p className="text-sm text-muted-foreground">
                  Posted by {discussion.author}
                </p>
              </div>
              <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                {discussion.category}
              </span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <MessageSquare className="h-4 w-4 mr-1" />
                {discussion.replies} replies
              </div>
              <Button variant="ghost" size="sm">
                Join Discussion
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Button className="w-full mt-4">Start New Discussion</Button>
    </Card>
  );
}