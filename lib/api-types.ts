export type ApiResponse<T = any> = {
  success: boolean;
  data?: T;
  error?: string;
};

export type UserProfile = {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  headline?: string;
  bio?: string;
  location?: string;
  website?: string;
  currentTitle?: string;
  currentCompany?: string;
  yearsOfExperience?: number;
};
