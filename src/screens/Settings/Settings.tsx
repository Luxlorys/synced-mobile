import { isIOS } from 'lib';
import React from 'react';
import { UnistylesRuntime } from 'react-native-unistyles';
import { resetAllStores } from 'stores';
import { Box } from 'themes';
import { Button, StatusBar } from 'ui';
import { UserInfoHeader } from 'widgets';

export const Settings = () => {
  return (
    <Box
      flex={1}
      paddingTop={isIOS ? UnistylesRuntime.insets.top : 16}
      paddingBottom={isIOS ? UnistylesRuntime.insets.bottom : 16}
      paddingHorizontal={16}
      backgroundColor="dark_mode">
      <StatusBar />
      <UserInfoHeader />
      <Box flex={1} alignItems="center" justifyContent="center">
        <Button
          title="Log out"
          type="primary"
          variant="filled"
          onPress={resetAllStores}
        />
      </Box>
    </Box>
  );
};
