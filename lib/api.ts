import { UserProfile, Resume, Job, Application, ResumeAnalysis } from './types';

class APIError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'APIError';
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new APIError(response.status, await response.text());
  }
  return response.json();
}

export const api = {
  // Auth
  async login(email: string, password: string) {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    return handleResponse<{ user: UserProfile; token: string }>(response);
  },

  // Profile
  async getProfile(): Promise<UserProfile> {
    const response = await fetch('/api/profile');
    return handleResponse<UserProfile>(response);
  },

  async updateProfile(data: Partial<UserProfile>): Promise<UserProfile> {
    const response = await fetch('/api/profile', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return handleResponse<UserProfile>(response);
  },

  // Resume
  async uploadResume(file: File): Promise<Resume> {
    const formData = new FormData();
    formData.append('resume', file);

    const response = await fetch('/api/resume/upload', {
      method: 'POST',
      body: formData,
    });
    return handleResponse<Resume>(response);
  },

  async analyzeResume(id: string): Promise<ResumeAnalysis> {
    const response = await fetch(`/api/resume/${id}/analyze`);
    return handleResponse<ResumeAnalysis>(response);
  },

  // Jobs
  async searchJobs(query: string, filters?: {
    location?: string;
    type?: string;
    salary?: string;
  }): Promise<Job[]> {
    const params = new URLSearchParams({ query });
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value) params.append(key, value);
      });
    }

    const response = await fetch(`/api/jobs/search?${params}`);
    return handleResponse<Job[]>(response);
  },

  async getApplications(): Promise<Application[]> {
    const response = await fetch('/api/applications');
    return handleResponse<Application[]>(response);
  },

  async createApplication(jobId: string, data: Partial<Application>): Promise<Application> {
    const response = await fetch('/api/applications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jobId, ...data }),
    });
    return handleResponse<Application>(response);
  },

  async updateApplication(id: string, data: Partial<Application>): Promise<Application> {
    const response = await fetch(`/api/applications/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return handleResponse<Application>(response);
  },
}