import { useMutationEvents, useSignInMutationAuthService } from 'api';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RouteService } from 'services';
import { useAuthStoreSelectors } from 'stores';
import { signInFormResolver, SignInFormType } from './auth.features.models';

export const useSignIn = () => {
  const signInMutation = useSignInMutationAuthService();

  const setUser = useAuthStoreSelectors.use.setUser();
  const setToken = useAuthStoreSelectors.use.setToken();

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
      setToken(data.authentication);
      setUser(data.user);
    },
  });

  return {
    handleSignIn: handleSubmit(handleSignIn),
    isPending: signInMutation.isPending,
    control,
    handleSignUp,
  };
};
