import React from 'react';
import { useStatusBar } from 'hooks';
import { CreateTask } from 'screens';
import { Stack } from './lib';
import { BottomTabBarNavigator } from './BottomTabBarNavigator';

export const MainNavigator: React.FC = () => {
  useStatusBar({});

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="BOTTOM_TAB_BAR_NAVIGATOR"
        component={BottomTabBarNavigator}
      />
      <Stack.Screen name="CREATE_TASK" component={CreateTask} />
    </Stack.Navigator>
  );
};
