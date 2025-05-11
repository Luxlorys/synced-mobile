import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { UnistylesRegistry, UnistylesProvider } from 'react-native-unistyles';
import { QueryClientProvider } from '@tanstack/react-query';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ReducedMotionConfig, ReduceMotion } from 'react-native-reanimated';
import { ModalProvider } from 'react-native-modalfy';
import { queryClient } from 'api';
import { DefaultTheme, breakpoints } from 'themes';
import { modalStack } from 'widgets';
import { RootNavigator } from 'navigation';
import { EventEmitterProvider } from 'providers';
import { isDev } from 'lib';
import { ToastMessage } from 'ui';

if (isDev) {
  require('./ReactotronConfig');
}

UnistylesRegistry.addBreakpoints(breakpoints).addThemes({
  defaultTheme: DefaultTheme,
});

export const App: React.FC = () => (
  <UnistylesProvider>
    <ReducedMotionConfig mode={ReduceMotion.Never} />
    <GestureHandlerRootView style={styles.layout}>
      <KeyboardProvider>
        <SafeAreaProvider>
          <QueryClientProvider client={queryClient}>
            <ModalProvider stack={modalStack}>
              <BottomSheetModalProvider>
                <EventEmitterProvider>
                  <RootNavigator />
                </EventEmitterProvider>
              </BottomSheetModalProvider>
            </ModalProvider>
          </QueryClientProvider>
          <ToastMessage />
        </SafeAreaProvider>
      </KeyboardProvider>
    </GestureHandlerRootView>
  </UnistylesProvider>
);

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
});
