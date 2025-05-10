import React, { useState } from 'react';
import { TextInput as BaseTextInput, TextInputProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Box, Colors, Text } from 'themes';
import {
  constructBorderColor,
  constructHeight,
  constructLabelColor,
  InputSize,
} from './lib';

export interface Props extends TextInputProps {
  error?: string;
  marginBottom?: number;
  marginTop?: number;
  borderRadius?: number;
  placeholder?: string;
  size?: InputSize;
  label?: string;
}

export const UIPhoneNumberInput = ({
  error,
  value,
  marginBottom = 0,
  marginTop = 0,
  placeholder = '',
  size = 'base',
  label,
  ...rest
}: Props) => {
  const { theme, styles } = useStyles(stylesheet);

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);

  return (
    <Box marginTop={marginTop} marginBottom={marginBottom}>
      {label && (
        <Text marginBottom={4} style={styles.label(isFocused, !!error)}>
          {label}
        </Text>
      )}
      <Box
        minHeight={constructHeight(size)}
        style={styles.container(isFocused, !!error)}>
        <Box
          backgroundColor="white_5_opacity"
          alignItems="center"
          justifyContent="center"
          width={44}>
          <Text
            color="white_80_opacity"
            fontSize="base"
            fontWeight={500}
            fontFamily="PoppinsMedium">
            +1
          </Text>
        </Box>
        <BaseTextInput
          style={styles.textInput}
          placeholderTextColor={theme.colors.gray_400}
          value={value}
          autoCapitalize="none"
          onFocus={handleFocus}
          onBlur={handleBlur}
          keyboardType="numeric"
          placeholder={placeholder}
          {...rest}
        />
      </Box>
      {error && <Text style={styles.error}>{error}</Text>}
    </Box>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: (isFocused: boolean, isError: boolean) => ({
    flexDirection: 'row',
    width: '100%',
    backgroundColor: theme.colors.white_5_opacity,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors[constructBorderColor(isFocused, isError)],
  }),
  textInput: {
    flex: 1,
    paddingHorizontal: 16,
    color: theme.colors.white,
    fontFamily: theme.fonts.PoppinsMedium,
    fontSize: theme.sizes.m,
    fontWeight: '500',
  },
  error: {
    color: theme.colors.red_500,
    marginTop: 4,
    fontSize: theme.sizes.s,
  },
  rightIconBox: {
    position: 'absolute',
    zIndex: 999,
    right: 12,
    alignSelf: 'center',
  },
  label: (isFocused: boolean, error: boolean) => ({
    color: Colors[constructLabelColor(isFocused, error)],
    fontFamily: theme.fonts.PoppinsMedium,
  }),
}));
