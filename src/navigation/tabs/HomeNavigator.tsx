import { Stack } from 'navigation';
import React from 'react';
import { Home } from 'screens';

export const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HOME" component={Home} />
    </Stack.Navigator>
  );
};
