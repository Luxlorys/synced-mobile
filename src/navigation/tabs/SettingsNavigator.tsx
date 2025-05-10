import { Stack } from 'navigation';
import React from 'react';
import { Settings } from 'screens';

export const SettingsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SETTINGS" component={Settings} />
    </Stack.Navigator>
  );
};
