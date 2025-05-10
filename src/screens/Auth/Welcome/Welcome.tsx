import { isIOS } from 'lib';
import React from 'react';
import {
  createStyleSheet,
  UnistylesRuntime,
  useStyles,
} from 'react-native-unistyles';
import { Box, Text } from 'themes';
import { Button, KeyboardAwareScrollView } from 'ui';

export const Welcome = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.wrapper}>
      <Box
        flex={1}
        paddingHorizontal={16}
        alignItems="center"
        justifyContent="center">
        <Text
          fontSize="title"
          fontWeight={600}
          fontFamily="GilroyMedium"
          color="dark_mode">
          Welcome to Synced
        </Text>
      </Box>
      <Box
        paddingBottom={isIOS ? UnistylesRuntime.insets.bottom : 16}
        paddingTop={24}
        backgroundColor="dark_mode"
        borderTopLeftRadius={36}
        borderTopRightRadius={36}
        alignItems="center"
        justifyContent="center"
        paddingHorizontal={16}>
        <Button
          title="Alredy have an account? Sign In"
          type="primary"
          variant="filled"
        />
        <Button
          marginTop={8}
          title="Create an account"
          type="primary"
          variant="outline"
        />
      </Box>
    </KeyboardAwareScrollView>
  );
};

const stylesheet = createStyleSheet((_, runtime) => ({
  wrapper: {
    flexGrow: 1,
    paddingTop: isIOS ? runtime.insets.top : 16,
  },
}));
