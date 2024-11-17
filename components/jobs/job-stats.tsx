"use client";

import { Card } from "@/components/ui/card";
import { Target, Users, CheckCircle, Clock } from "lucide-react";

export function JobStats() {
  const stats = [
    {
      label: "Applications",
      value: "12",
      icon: Target,
      change: "+3",
    },
    {
      label: "Interviews",
      value: "4",
      icon: Users,
      change: "+1",
    },
    {
      label: "Offers",
      value: "2",
      icon: CheckCircle,
      change: "+1",
    },
    {
      label: "Pending",
      value: "6",
      icon: Clock,
      change: "-2",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-4">
          <div className="flex items-center justify-between space-x-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
              <div className="flex items-center">
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                {stat.change && (
                  <span
                    className={`ml-2 text-sm ${
                      stat.change.startsWith("+")
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {stat.change}
                  </span>
                )}
              </div>
            </div>
            <stat.icon className="h-8 w-8 text-muted-foreground" />
          </div>
        </Card>
      ))}
    </div>
  );
}