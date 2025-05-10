import { useSignUpMain } from 'features';
import { isIOS } from 'lib';
import React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Box, Text, TouchableOpacity } from 'themes';
import {
  BaseHeader,
  Button,
  ControlledPasswordTextInput,
  ControlledTextInput,
  KeyboardAwareScrollView,
} from 'ui';
import { UserRolePickerProvider } from 'widgets';

export const SignUpMain = () => {
  const { styles } = useStyles(stylesheet);

  const { control, handleContinue, userRoles, handleSignIn } = useSignUpMain();

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.wrapper}>
      <Box flex={1}>
        <BaseHeader />
        <Text
          color="white_80_opacity"
          fontWeight={600}
          fontFamily="GilroySemiBold"
          fontSize="title">
          Create new account
        </Text>
        <UserRolePickerProvider
          control={control}
          name="role"
          items={userRoles}
        />
        <ControlledTextInput
          marginTop={16}
          control={control}
          placeholder="Email"
          name="email"
        />
        <ControlledPasswordTextInput
          marginTop={16}
          control={control}
          placeholder="Password"
          name="password"
        />
        <ControlledPasswordTextInput
          marginTop={16}
          control={control}
          placeholder="Confirm password"
          name="confirmPassword"
        />
        <TouchableOpacity
          marginTop={24}
          onPress={handleSignIn}
          alignSelf="center">
          <Text
            color="muted_background"
            fontSize="m"
            fontWeight={500}
            fontFamily="GilroyRegular">
            Already have an account?{' '}
            <Text style={{ textDecorationLine: 'underline' }}>
              Sign In here
            </Text>
          </Text>
        </TouchableOpacity>
      </Box>
      <Button
        onPress={handleContinue}
        title="Continue"
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
