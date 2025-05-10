import { useMutation } from '@tanstack/react-query';
import { QueryError, queryKeys } from '../../models';
import { AuthService } from '../AuthService';

import { SignUpRequest, AuthResponse } from '../models';

export const signUpMutationFnAuthService = async (params: SignUpRequest) => {
  const response = await AuthService.signUp(params);

  return response?.data;
};

const getMutationKey = () => queryKeys.signUpAuthService();

export const useSignUpMutationAuthService = () => {
  return useMutation<AuthResponse, QueryError, SignUpRequest>({
    mutationFn: signUpMutationFnAuthService,
    mutationKey: getMutationKey(),
  });
};
