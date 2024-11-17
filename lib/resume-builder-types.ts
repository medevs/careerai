export interface ResumeData {
  id: string;
  basics: {
    name: string;
    email: string;
    phone: string;
    location: string;
    website?: string;
    summary: string;
  };
  experience: Array<{
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate?: string;
    current: boolean;
    description: string;
  }>;
  education: Array<{
    id: string;
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    gpa?: string;
  }>;
  skills: Array<{
    id: string;
    name: string;
    level: "beginner" | "intermediate" | "advanced" | "expert";
  }>;
  projects: Array<{
    id: string;
    name: string;
    description: string;
    url?: string;
    highlights: string[];
  }>;
  certifications: Array<{
    id: string;
    name: string;
    issuer: string;
    date: string;
    url?: string;
  }>;
}

export const defaultResumeData: ResumeData = {
  id: "",
  basics: {
    name: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    summary: "",
  },
  experience: [],
  education: [],
  skills: [],
  projects: [],
  certifications: [],
};