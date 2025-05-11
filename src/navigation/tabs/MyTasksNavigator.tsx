import { Stack } from 'navigation';
import React from 'react';
import { MyTasks } from 'screens';

export const MyTasksNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MY_TASKS" component={MyTasks} />
    </Stack.Navigator>
  );
};
