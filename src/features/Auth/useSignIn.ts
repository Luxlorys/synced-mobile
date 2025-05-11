import { useMutationEvents, useSignInMutationAuthService } from 'api';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RouteService } from 'services';
import { signInFormResolver, SignInFormType } from './auth.features.models';

export const useSignIn = () => {
  const signInMutation = useSignInMutationAuthService();

  const { control, handleSubmit } = useForm<SignInFormType>({
    resolver: signInFormResolver,
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSignIn: SubmitHandler<SignInFormType> = async ({
    email,
    password,
  }) => {
    await signInMutation.mutateAsync({
      email,
      password,
    });
  };

  const handleSignUp = () => RouteService.navigate('SIGN_UP_MAIN');

  useMutationEvents(signInMutation, {
    onSuccess: data => {
      console.log(data);
    },
  });

  return {
    handleSignIn: handleSubmit(handleSignIn),
    isPending: signInMutation.isPending,
    control,
    handleSignUp,
  };
};
