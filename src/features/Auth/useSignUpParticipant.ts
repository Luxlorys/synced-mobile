import { useRoute } from '@react-navigation/native';
import { useMutationEvents, useSignUpMutationAuthService } from 'api';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignUpParticipantRouteProp, ToastService } from 'services';
import { useAuthStoreSelectors } from 'stores';
import {
  SignUpParticipant,
  signUpParticipantFormResolver,
} from './auth.features.models';

export const useSignUpParticipant = () => {
  const { params } = useRoute<SignUpParticipantRouteProp>();

  const signUpMutation = useSignUpMutationAuthService();

  const setUser = useAuthStoreSelectors.use.setUser();
  const setToken = useAuthStoreSelectors.use.setToken();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<SignUpParticipant>({
    resolver: signUpParticipantFormResolver,
    defaultValues: {
      inviteCode: '',
      userFullName: '',
    },
  });

  const handleSignUp: SubmitHandler<SignUpParticipant> = async ({
    inviteCode,
    userFullName,
  }) => {
    await signUpMutation.mutateAsync({
      email: params.email,
      password: params.password,
      fullName: userFullName,
      role: 'Participant',
      identifier: inviteCode,
    });
  };

  useMutationEvents(signUpMutation, {
    onSuccess: data => {
      setToken(data.authentication);
      setUser(data.user);
      ToastService.onSuccess({
        title: 'You were successfully registerd!',
      });
    },
  });

  return {
    control,
    handleSignUp: handleSubmit(handleSignUp),
    isPending: signUpMutation.isPending,
    isValid,
  };
};
