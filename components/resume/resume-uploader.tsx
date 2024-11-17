"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, File } from "lucide-react";
import { useState } from "react";

export function ResumeUploader() {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file drop
  };

  return (
    <Card
      className={`p-6 ${
        isDragging ? "border-primary" : ""
      } transition-colors duration-200`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed rounded-lg">
        <Upload className="h-10 w-10 text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">Upload Your Resume</h3>
        <p className="text-sm text-muted-foreground mb-4 text-center">
          Drag and drop your resume here, or click to browse
        </p>
        <Button>
          <File className="mr-2 h-4 w-4" />
          Select File
        </Button>
      </div>
    </Card>
  );
}