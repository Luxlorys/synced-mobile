import React from 'react';
import { Auth } from 'screens';
import { useStatusBar } from 'hooks';
import { Stack } from './lib';

export const AuthNavigator: React.FC = () => {
  useStatusBar({});

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AUTH" component={Auth} />
    </Stack.Navigator>
  );
};
