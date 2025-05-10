import { useSignIn } from 'features';
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

export const SignIn = () => {
  const { styles } = useStyles(stylesheet);

  const { control, handleSignIn, handleSignUp, isPending } = useSignIn();

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.wrapper}>
      <Box flex={1}>
        <BaseHeader />
        <Text
          color="white_80_opacity"
          fontWeight={600}
          fontFamily="GilroySemiBold"
          fontSize="title">
          Sign in to your account
        </Text>
        <ControlledTextInput
          marginTop={24}
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
        <TouchableOpacity
          marginTop={24}
          alignSelf="center"
          onPress={handleSignUp}>
          <Text
            color="muted_background"
            fontSize="m"
            fontWeight={500}
            fontFamily="GilroyRegular">
            Don&lsquo;t have an account?{' '}
            <Text style={{ textDecorationLine: 'underline' }}>
              Sign Up here
            </Text>
          </Text>
        </TouchableOpacity>
      </Box>
      <Button
        isLoading={isPending}
        onPress={handleSignIn}
        title="Sign In"
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
