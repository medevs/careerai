"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SkillsForm } from "@/components/onboarding/skills-form";
import { JobTitlesForm } from "@/components/onboarding/job-titles-form";
import { ResumeUploadForm } from "@/components/onboarding/resume-upload-form";
import { useToast } from "@/components/ui/use-toast";

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [skills, setSkills] = useState<string[]>([]);
  const [selectedTitles, setSelectedTitles] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);
  
  const router = useRouter();
  const { toast } = useToast();
  const totalSteps = 3;

  const handleComplete = async () => {
    try {
      // Create FormData for file upload
      const formData = new FormData();
      if (file) {
        formData.append("resume", file);
      }
      formData.append("skills", JSON.stringify(skills));
      formData.append("jobTitles", JSON.stringify(selectedTitles));

      // Send data to your API
      const response = await fetch("/api/user/complete-onboarding", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to save onboarding data");
      }

      toast({
        title: "Profile Complete!",
        description: "Your profile has been successfully updated.",
      });

      // Redirect to dashboard
      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save your profile. Please try again.",
        variant: "destructive",
      });
    }
  };

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      handleComplete();
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="container max-w-3xl mx-auto py-10">
      <Card className="p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Complete Your Profile</h1>
          <Progress value={(step / totalSteps) * 100} className="h-2" />
        </div>

        {step === 1 && (
          <SkillsForm 
            onNext={nextStep} 
            skills={skills}
            setSkills={setSkills}
          />
        )}
        {step === 2 && (
          <JobTitlesForm 
            onNext={nextStep} 
            onBack={prevStep}
            selectedTitles={selectedTitles}
            setSelectedTitles={setSelectedTitles}
          />
        )}
        {step === 3 && (
          <ResumeUploadForm 
            onNext={nextStep} 
            onBack={prevStep}
            file={file}
            setFile={setFile}
          />
        )}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <Button variant="outline" onClick={prevStep}>
              Back
            </Button>
          )}
          {step < totalSteps && (
            <Button className="ml-auto" onClick={nextStep}>
              Next
            </Button>
          )}
          {step === totalSteps && (
            <Button className="ml-auto" onClick={nextStep}>
              Complete
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
