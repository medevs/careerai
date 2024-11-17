"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResumeData } from "@/lib/resume-builder-types";
import { BasicInfoForm } from "./forms/basic-info-form";
import { ExperienceForm } from "./forms/experience-form";
import { EducationForm } from "./forms/education-form";
import { SkillsForm } from "./forms/skills-form";
import { ProjectsForm } from "./forms/projects-form";
import { CertificationsForm } from "./forms/certifications-form";

interface ResumeEditorProps {
  data: ResumeData;
  onChange: (data: Partial<ResumeData>) => void;
}

export function ResumeEditor({ data, onChange }: ResumeEditorProps) {
  return (
    <Tabs defaultValue="basics" className="w-full">
      <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1">
        <TabsTrigger value="basics" className="text-sm sm:text-base whitespace-nowrap">Basics</TabsTrigger>
        <TabsTrigger value="experience" className="text-sm sm:text-base whitespace-nowrap">Experience</TabsTrigger>
        <TabsTrigger value="education" className="text-sm sm:text-base whitespace-nowrap">Education</TabsTrigger>
        <TabsTrigger value="skills" className="text-sm sm:text-base whitespace-nowrap">Skills</TabsTrigger>
        <TabsTrigger value="projects" className="text-sm sm:text-base whitespace-nowrap">Projects</TabsTrigger>
        <TabsTrigger value="certifications" className="text-sm sm:text-base whitespace-nowrap">Certifications</TabsTrigger>
      </TabsList>

      <TabsContent value="basics">
        <BasicInfoForm
          data={data.basics}
          onChange={(basics) => onChange({ basics })}
        />
      </TabsContent>

      <TabsContent value="experience">
        <ExperienceForm
          items={data.experience}
          onChange={(experience) => onChange({ experience })}
        />
      </TabsContent>

      <TabsContent value="education">
        <EducationForm
          items={data.education}
          onChange={(education) => onChange({ education })}
        />
      </TabsContent>

      <TabsContent value="skills">
        <SkillsForm
          items={data.skills}
          onChange={(skills) => onChange({ skills })}
        />
      </TabsContent>

      <TabsContent value="projects">
        <ProjectsForm
          items={data.projects}
          onChange={(projects) => onChange({ projects })}
        />
      </TabsContent>

      <TabsContent value="certifications">
        <CertificationsForm
          items={data.certifications}
          onChange={(certifications) => onChange({ certifications })}
        />
      </TabsContent>
    </Tabs>
  );
}