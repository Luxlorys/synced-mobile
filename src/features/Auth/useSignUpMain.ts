import { SubmitHandler, useForm } from 'react-hook-form';
import { RouteService } from 'services';
import { SignUpForm, signUpFormResolver } from './auth.features.models';
import { userRoles } from './config';

export const useSignUpMain = () => {
  const { control, handleSubmit } = useForm<SignUpForm>({
    resolver: signUpFormResolver,
    defaultValues: {
      role: userRoles[0],
      confirmPassword: '',
      email: '',
      password: '',
    },
  });

  const handleContinue: SubmitHandler<SignUpForm> = ({
    password,
    email,
    role,
  }) => {
    if (role.value === 'Admin') {
      RouteService.navigate('SIGN_UP_COMPANY', { email, password });

      return;
    }

    RouteService.navigate('SIGN_UP_PARTICIPANT', { email, password });
  };

  const handleSignIn = () => RouteService.navigate('SIGN_IN');

  return {
    control,
    handleContinue: handleSubmit(handleContinue),
    userRoles,
    handleSignIn,
  };
};
