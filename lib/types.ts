export interface UserProfile {
  id: string;
  email: string;
  name: string;
  title?: string;
  bio?: string;
  location?: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
}

export interface Experience {
  id: string;
  company: string;
  title: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
}

export interface Resume {
  id: string;
  userId: string;
  file: string;
  score: number;
  analysis: ResumeAnalysis;
  createdAt: string;
  updatedAt: string;
}

export interface ResumeAnalysis {
  scores: {
    experience: number;
    education: number;
    skills: number;
    achievements: number;
    format: number;
  };
  suggestions: Array<{
    type: 'improvement' | 'success';
    title: string;
    description: string;
    priority: 'High' | 'Medium' | 'Low' | 'Success';
  }>;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  salary?: string;
  description: string;
  requirements: string[];
  posted: string;
}

export interface Application {
  id: string;
  jobId: string;
  userId: string;
  status: 'Applied' | 'Interview' | 'Offer' | 'Rejected';
  appliedDate: string;
  notes?: string;
}