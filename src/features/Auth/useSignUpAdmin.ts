import { useRoute } from '@react-navigation/native';
import { useMutationEvents, useSignUpMutationAuthService } from 'api';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignUpCompanyRouteProp, ToastService } from 'services';
import { useAuthStoreSelectors } from 'stores';
import { SignUpAdmin, signUpAdminFormResolver } from './auth.features.models';

export const useSignUpAdmin = () => {
  const { params } = useRoute<SignUpCompanyRouteProp>();

  const signUpMutation = useSignUpMutationAuthService();

  const setUser = useAuthStoreSelectors.use.setUser();
  const setToken = useAuthStoreSelectors.use.setToken();

  const { control, handleSubmit } = useForm<SignUpAdmin>({
    resolver: signUpAdminFormResolver,
    defaultValues: {
      companyName: '',
      size: 5,
      userFullName: '',
    },
  });

  const handleSignUp: SubmitHandler<SignUpAdmin> = async ({
    companyName,
    size,
    userFullName,
  }) => {
    await signUpMutation.mutateAsync({
      email: params.email,
      password: params.password,
      fullName: userFullName,
      role: 'Admin',
      company: {
        name: companyName,
        size: Number(size),
      },
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
  };
};
