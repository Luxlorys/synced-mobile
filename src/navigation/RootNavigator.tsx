import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RouteService } from 'services';
import RNBootSplash from 'react-native-bootsplash';
import { useSelectAccessToken } from 'stores';
import { StatusBar } from 'react-native';
import { MainNavigator } from './MainNavigator';
import { AuthNavigator } from './AuthNavigator';
import { Stack, navigationTheme } from './lib';

export const RootNavigator: React.FC = () => {
  const token = useSelectAccessToken();

  return (
    <NavigationContainer
      ref={RouteService.navigationRef}
      theme={navigationTheme}
      onReady={() => RNBootSplash.hide({ fade: true })}>
      <StatusBar barStyle="dark-content" />

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {token ? (
          <Stack.Screen name="MAIN_NAVIGATOR" component={MainNavigator} />
        ) : (
          <Stack.Screen name="AUTH_NAVIGATOR" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
