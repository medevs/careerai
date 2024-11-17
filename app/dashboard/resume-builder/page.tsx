"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Download, Save } from "lucide-react";
import { ResumeEditor } from "@/components/resume-builder/resume-editor";
import { ResumePreview } from "@/components/resume-builder/resume-preview";
import { ResumeTemplateSelector } from "@/components/resume-builder/template-selector";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { ResumeData, defaultResumeData } from "@/lib/resume-builder-types";
import { mockResumeData } from "@/lib/mock-resume";
import { toast } from "sonner";

export default function ResumeBuilderPage() {
  const [activeResumeId, setActiveResumeId] = useState<string | null>("mock-resume");
  const [resumes, setResumes] = useLocalStorage<Record<string, ResumeData>>("resumes", {
    "mock-resume": mockResumeData
  });
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [currentResume, setCurrentResume] = useState<ResumeData>(mockResumeData);

  useEffect(() => {
    if (activeResumeId && resumes[activeResumeId]) {
      setCurrentResume(resumes[activeResumeId]);
    }
  }, [activeResumeId, resumes]);

  const createNewResume = () => {
    const id = crypto.randomUUID();
    const newResume = { ...defaultResumeData, id };
    setResumes((prev) => ({ ...prev, [id]: newResume }));
    setActiveResumeId(id);
    setCurrentResume(newResume);
    toast.success("New resume created");
  };

  const saveResume = () => {
    if (!activeResumeId) return;
    setResumes((prev) => ({ ...prev, [activeResumeId]: currentResume }));
    toast.success("Resume saved successfully");
  };

  const updateResume = (data: Partial<ResumeData>) => {
    setCurrentResume((prev) => ({ ...prev, ...data }));
  };

  const exportToPDF = async () => {
    try {
      // PDF export logic will be implemented
      toast.success("Resume exported to PDF");
    } catch (error) {
      toast.error("Failed to export resume");
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Resume Builder</h2>
          <p className="text-muted-foreground">
            Create and manage your professional resumes
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={createNewResume}>
            <Plus className="h-4 w-4 mr-2" />
            New Resume
          </Button>
          <Button variant="outline" onClick={saveResume} disabled={!activeResumeId}>
            <Save className="h-4 w-4 mr-2" />
            Save
          </Button>
          <Button onClick={exportToPDF} disabled={!activeResumeId}>
            <Download className="h-4 w-4 mr-2" />
            Export PDF
          </Button>
        </div>
      </div>

      {activeResumeId ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <ResumeTemplateSelector
              value={selectedTemplate}
              onChange={setSelectedTemplate}
            />
            <ResumeEditor
              data={currentResume}
              onChange={updateResume}
            />
          </div>
          <div className="lg:sticky lg:top-6 space-y-6">
            <ResumePreview
              data={currentResume}
              template={selectedTemplate}
            />
          </div>
        </div>
      ) : (
        <Card className="p-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Get Started</h3>
          <p className="text-muted-foreground mb-4">
            Create a new resume or select an existing one to edit
          </p>
          <Button onClick={createNewResume}>
            <Plus className="h-4 w-4 mr-2" />
            Create New Resume
          </Button>
        </Card>
      )}
    </div>
  );
}