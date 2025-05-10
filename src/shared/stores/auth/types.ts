import { Authentication, AuthResponse, User } from 'api';

export interface AuthState extends AuthResponse {}

export interface AuthStore extends AuthState {
  setToken: (token: Authentication) => void;
  setUser: (user: User) => void;
}
