import { useSignUpAdmin } from 'features';
import { isIOS } from 'lib';
import React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Box, Text } from 'themes';
import {
  Button,
  ControlledTextInput,
  KeyboardAwareScrollView,
  ControlledSlider,
  BaseHeader,
} from 'ui';

export const SignUpCompany = () => {
  const { styles } = useStyles(stylesheet);

  const { control, handleSignUp, isPending } = useSignUpAdmin();

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.wrapper}>
      <Box flex={1}>
        <BaseHeader />
        <Text
          color="white_80_opacity"
          fontWeight={600}
          fontFamily="GilroySemiBold"
          fontSize="title">
          Your personal data and company info
        </Text>
        <ControlledTextInput
          marginTop={16}
          control={control}
          placeholder="Full name"
          name="userFullName"
        />
        <ControlledTextInput
          marginTop={16}
          control={control}
          placeholder="Company name"
          name="companyName"
        />
        <ControlledSlider
          control={control}
          name="size"
          leftText="2 employee"
          rightText="100 employee"
        />
      </Box>
      <Button
        onPress={handleSignUp}
        isLoading={isPending}
        title="Sign Up"
        type="primary"
        variant="filled"
      />
    </KeyboardAwareScrollView>
  );
};

const stylesheet = createStyleSheet((theme, runtime) => ({
  wrapper: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: isIOS ? runtime.insets.top : 16,
    paddingBottom: isIOS ? runtime.insets.bottom : 16,
    backgroundColor: theme.colors.dark_mode,
  },
}));
