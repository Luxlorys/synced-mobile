import { Stack } from 'navigation';
import React from 'react';
import { Notifications } from 'screens';

export const NotificationsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="NOTIFICATIONS" component={Notifications} />
    </Stack.Navigator>
  );
};
