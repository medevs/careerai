"use client";

import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export function MarketTrends() {
  const trends = [
    {
      title: "AI & Machine Learning",
      growth: "+25%",
      description: "High demand for AI specialists and ML engineers",
    },
    {
      title: "Cloud Computing",
      growth: "+20%",
      description: "Growing need for cloud architects and developers",
    },
    {
      title: "Cybersecurity",
      growth: "+30%",
      description: "Critical demand for security professionals",
    },
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Market Trends</h3>
        <TrendingUp className="h-5 w-5 text-primary" />
      </div>
      <div className="space-y-4">
        {trends.map((trend) => (
          <div key={trend.title} className="flex items-start space-x-4">
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <p className="font-medium">{trend.title}</p>
                <span className="text-sm text-green-500">{trend.growth}</span>
              </div>
              <p className="text-sm text-muted-foreground">{trend.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}