export type UserRole = 'Admin' | 'Participant';

export interface CompanyInfo {
  name: string;
  size: number;
}

export interface CompanyInfoExtended extends CompanyInfo {
  identifier: string;
}

export interface SignUpRequest {
  email: string;
  password: string;
  fullName: string;
  role: UserRole;
  company?: CompanyInfo;
  identifier?: string;
}

export interface SignInRequest {
  email: string;
  password: string;
}

export interface Authentication {
  accessToken: string;
  refreshToken: string;
}

export interface User {
  id: number;
  createdAt: string;
  lastUpdated: string | null;
  email: string;
  fullName: string;
  role: UserRole;
  company: CompanyInfoExtended;
}

export interface AuthResponse {
  authentication: Authentication;
  user: User;
}
