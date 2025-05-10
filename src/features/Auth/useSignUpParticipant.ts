import { useRoute } from '@react-navigation/native';
import { useMutationEvents, useSignUpMutationAuthService } from 'api';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignUpParticipantRouteProp, ToastService } from 'services';
import {
  SignUpParticipant,
  signUpParticipantFormResolver,
} from './auth.features.models';

export const useSignUpParticipant = () => {
  const { params } = useRoute<SignUpParticipantRouteProp>();

  const signUpMutation = useSignUpMutationAuthService();

  const { control, handleSubmit } = useForm<SignUpParticipant>({
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
      console.log(data);
      ToastService.onSuccess({
        title: 'You were successfully registerd!',
      });
    },
  });

  return {
    control,
    handleSignUp: handleSubmit(handleSignUp),
    isPending: signUpMutation.isPending,
  };
};
