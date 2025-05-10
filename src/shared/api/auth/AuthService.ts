import { createApi } from 'api/createApi';
import { baseQuery } from '../baseQuery';
import { AuthResponse, SignInRequest, SignUpRequest } from './models';

export const AuthService = createApi({
  baseQuery,
  endpoints: builder => ({
    signIn: builder.post<AuthResponse, SignInRequest>({
      query: data => ({
        url: '/auth/sign-in',
        data,
      }),
    }),
    signUp: builder.post<AuthResponse, SignUpRequest>({
      query: data => ({
        url: '/auth/sign-up',
        data,
      }),
    }),
  }),
});
