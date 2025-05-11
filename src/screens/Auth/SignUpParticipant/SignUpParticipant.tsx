import { useSignUpParticipant } from 'features';
import { isIOS } from 'lib';
import React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Box, Text } from 'themes';
import {
  Button,
  ControlledTextInput,
  KeyboardAwareScrollView,
  BaseHeader,
  Accordion,
  ControlledOtpInput,
} from 'ui';

export const SignUpParticipant = () => {
  const { styles } = useStyles(stylesheet);

  const { control, handleSignUp, isPending, isValid } = useSignUpParticipant();

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.wrapper}>
      <Box flex={1}>
        <BaseHeader />
        <Text
          color="white_80_opacity"
          fontWeight={600}
          fontFamily="GilroySemiBold"
          fontSize="title">
          Your personal data
        </Text>
        <ControlledTextInput
          marginTop={16}
          control={control}
          placeholder="Full name"
          name="userFullName"
        />
        <Accordion isVisible animationSpeed={740}>
          <Text
            marginTop={16}
            fontSize="base"
            color="white_80_opacity"
            fontFamily="GilroyMedium"
            fontWeight={500}>
            Company invite code
          </Text>
          <ControlledOtpInput
            margintTop={8}
            control={control}
            name="inviteCode"
            type="alphanumeric"
          />
        </Accordion>
      </Box>
      <Button
        onPress={handleSignUp}
        isLoading={isPending}
        title="Continue"
        type="primary"
        disabled={!isValid}
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
