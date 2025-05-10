import { isIOS } from 'lib';
import React from 'react';
import {
  createStyleSheet,
  UnistylesRuntime,
  useStyles,
} from 'react-native-unistyles';
import { Box } from 'themes';
import { Button, KeyboardAwareScrollView } from 'ui';

export const Welcome = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.wrapper}>
      <Box
        paddingHorizontal={16}
        paddingTop={isIOS ? UnistylesRuntime.insets.top : 16}
        flex={3}
        backgroundColor="dark_mode"
        borderBottomLeftRadius={64}
        borderBottomRightRadius={64}
      />
      <Box flex={1} justifyContent="flex-end" paddingHorizontal={16}>
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
    paddingBottom: isIOS ? runtime.insets.bottom : 16,
  },
}));
