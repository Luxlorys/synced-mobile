import React from 'react';
import { Profile } from 'screens';
import { Stack } from '../lib';

export const ProfileNavigator: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="PROFILE"
      component={Profile}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
