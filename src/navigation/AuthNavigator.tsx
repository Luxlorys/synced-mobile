import React from 'react';
import { useStatusBar } from 'hooks';
import {
  SignIn,
  SignUpCompany,
  SignUpEnterInvite,
  SignUpMain,
  SignUpParticipant,
  Welcome,
} from 'screens';
import { useStyles } from 'react-native-unistyles';
import { Stack } from './lib';

export const AuthNavigator: React.FC = () => {
  const { theme } = useStyles();

  useStatusBar({});

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarColor: theme.colors.dark_mode,
      }}>
      <Stack.Screen name="WELCOME" component={Welcome} />
      <Stack.Screen name="SIGN_IN" component={SignIn} />
      <Stack.Screen name="SIGN_UP_MAIN" component={SignUpMain} />
      <Stack.Screen
        name="SIGN_UP_ENTER_INVITE_CODE"
        component={SignUpEnterInvite}
      />
      <Stack.Screen name="SIGN_UP_COMPANY" component={SignUpCompany} />
      <Stack.Screen name="SIGN_UP_PARTICIPANT" component={SignUpParticipant} />
    </Stack.Navigator>
  );
};
