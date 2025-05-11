import React from 'react';
import {
  OtpInput as BaseOtpInput,
  OtpInputProps,
} from 'react-native-otp-entry';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Colors } from 'themes';

const BASE_DIGITS_LENGHT = 4;

export interface OtpProps extends OtpInputProps {
  numberOfDigits?: number;
  focusColor?: string;
  onFilled?: () => void;
  margintTop?: number;
  type: 'alpha' | 'numeric' | 'alphanumeric';
}

export const OtpInput = ({
  numberOfDigits = BASE_DIGITS_LENGHT,
  focusColor = Colors.primary_500,
  onTextChange,
  onFilled,
  type = 'alpha',
  margintTop = 0,
}: OtpProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <BaseOtpInput
      numberOfDigits={numberOfDigits}
      focusColor={focusColor}
      onTextChange={onTextChange}
      onFilled={onFilled}
      type={type}
      theme={{
        containerStyle: styles.container(margintTop),
        pinCodeContainerStyle: styles.pinCodeContainer,
        pinCodeTextStyle: styles.pinCodeText,
        focusStickStyle: styles.focusStick,
        filledPinCodeContainerStyle: styles.filled,
      }}
      autoFocus={false}
    />
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: (marginTop?: number) => ({
    width: '100%',
    marginTop,
    justifyContent: 'space-between',
  }),
  pinCodeContainer: {
    borderColor: theme.colors.white_40_opacity,
    borderWidth: 1,
    width: 64,
    height: 72,
    backgroundColor: theme.colors.transparent,
    borderRadius: 8,
  },
  pinCodeText: {
    fontSize: theme.sizes.xxxl,
    color: theme.colors.primary_500,
    fontWeight: 500,
    fontFamily: theme.fonts.GilroyBold,
  },
  focusStick: {
    backgroundColor: theme.colors.primary_500,
  },
  filled: {
    borderColor: theme.colors.primary_500,
    color: theme.colors.black,
  },
}));
