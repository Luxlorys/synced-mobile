import React, { ReactNode } from 'react';
import { Box, Colors, Text, TouchableOpacity } from 'themes';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { TouchableOpacityProps } from 'themes/ui/types';
import { ActivityIndicator } from 'react-native';
import {
  ButtonType,
  ButtonVariant,
  constructVariantBorderColor,
  constructVariantBorderWidth,
  constructBackgroundColor,
  constructVatiantTextColor,
  constructHeight,
  ButtonSize,
} from './lib';

interface Props extends TouchableOpacityProps {
  title: string;
  onPress?: () => void;
  isLoading?: boolean;
  type: ButtonType;
  variant: ButtonVariant;
  disabled?: boolean;
  size?: ButtonSize;
  marginTop?: number;
  marginBottom?: number;
  rightIcon?: ReactNode;
}

interface TextStyleSheetProps {
  type: ButtonType;
  variant: ButtonVariant;
  disabled: boolean;
}

interface ButtonStyleSheetProps extends TextStyleSheetProps {
  size: ButtonSize;
}

export const Button = ({
  variant = 'filled',
  type = 'primary',
  disabled = false,
  onPress,
  isLoading = false,
  title,
  size = 'base',
  marginTop,
  marginBottom,
  rightIcon,
}: Props) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <TouchableOpacity
      style={styles.button({ variant, type, disabled, size })}
      onPress={onPress}
      disabled={isLoading || disabled}
      marginTop={marginTop}
      activeOpacity={0.65}
      marginBottom={marginBottom}>
      {isLoading ? (
        <ActivityIndicator size="small" color={theme.colors.white} />
      ) : (
        <Box
          flexDirection="row"
          gap={5}
          alignItems="center"
          justifyContent="center">
          <Text style={styles.text({ variant, type, disabled })}>{title}</Text>
          {rightIcon}
        </Box>
      )}
    </TouchableOpacity>
  );
};

const stylesheet = createStyleSheet(theme => ({
  button: ({ variant, type, disabled, size }: ButtonStyleSheetProps) => ({
    width: '100%',
    backgroundColor: Colors[constructBackgroundColor(variant, type, disabled)],
    borderColor: Colors[constructVariantBorderColor(variant, type)],
    borderWidth: constructVariantBorderWidth(variant, type),
    height: constructHeight(size),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  }),
  text: ({ variant, type, disabled }: TextStyleSheetProps) => ({
    fontSize: theme.sizes.base,
    color: Colors[constructVatiantTextColor(variant, type, disabled)],
    fontFamily: theme.fonts.GilroyMedium,
    fontWeight: 400,
  }),
}));
