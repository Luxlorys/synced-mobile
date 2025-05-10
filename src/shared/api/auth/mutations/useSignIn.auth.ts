import { useMutation } from '@tanstack/react-query';
import { QueryError, queryKeys } from '../../models';
import { AuthService } from '../AuthService';

import { SignInRequest, AuthResponse } from '../models';

export const signInMutationFnAuthService = async (params: SignInRequest) => {
  const response = await AuthService.signIn(params);

  return response?.data;
};

const getMutationKey = () => queryKeys.signInAuthService();

export const useSignInMutationAuthService = () => {
  return useMutation<AuthResponse, QueryError, SignInRequest>({
    mutationFn: signInMutationFnAuthService,
    mutationKey: getMutationKey(),
  });
};
