import { isIOS } from 'lib';
import React from 'react';
import { UnistylesRuntime } from 'react-native-unistyles';
import { Box } from 'themes';
import { StatusBar } from 'ui';
import { UserInfoHeader } from 'widgets';

export const MyTasks = () => {
  return (
    <Box
      flex={1}
      paddingTop={isIOS ? UnistylesRuntime.insets.top : 16}
      paddingBottom={isIOS ? UnistylesRuntime.insets.bottom : 16}
      paddingHorizontal={16}
      backgroundColor="dark_mode">
      <StatusBar />
      <UserInfoHeader />
    </Box>
  );
};
