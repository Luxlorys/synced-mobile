import React from 'react';
import { TextInput as BaseTextInput, TextInputProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Box, Colors, Text, TouchableOpacity } from 'themes';
import { Icon } from 'ui';
import { IconName } from 'assets/resources/selection.json';
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
  rightIconName?: IconName;
  rightIconSize?: number;
  rightIconColor?: keyof typeof Colors;
  onRightPress?: () => void;
  placeholder?: string;
  size?: InputSize;
  label?: string;
  multiline?: boolean;
}

export const UITextInput = ({
  error,
  value,
  marginBottom = 0,
  marginTop = 0,
  rightIconColor = 'white',
  onRightPress,
  rightIconName,
  rightIconSize,
  placeholder = '',
  size = 'base',
  borderRadius = 8,
  label,
  multiline = false,
  ...rest
}: Props) => {
  const { theme, styles } = useStyles(stylesheet);

  return (
    <Box marginTop={marginTop} marginBottom={marginBottom}>
      {label && (
        <Text marginBottom={4} style={styles.label(false, !!error)}>
          {label}
        </Text>
      )}
      <Box
        borderRadius={borderRadius}
        height={constructHeight(size, !!multiline)}
        style={styles.container(false, !!error)}>
        {rightIconName && (
          <TouchableOpacity style={styles.rightIconBox} onPress={onRightPress}>
            <Icon
              name={rightIconName}
              color={rightIconColor}
              size={rightIconSize}
            />
          </TouchableOpacity>
        )}
        <BaseTextInput
          style={styles.textInput(!!rightIconName)}
          placeholderTextColor={theme.colors.gray_400}
          value={value}
          autoCapitalize="none"
          placeholder={placeholder}
          multiline={multiline}
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
    backgroundColor: theme.colors.white_10_opacity,
    borderWidth: 1,
    borderColor: Colors[constructBorderColor(isFocused, isError)],
  }),
  textInput: (isRightIconShown: boolean) => ({
    flex: 1,
    paddingLeft: 16,
    paddingRight: isRightIconShown ? 44 : 16,
    color: theme.colors.white,
    fontFamily: theme.fonts.GilroyMedium,
    fontSize: theme.sizes.base,
    fontWeight: '600',
  }),
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
    fontFamily: theme.fonts.GilroyMedium,
  }),
}));
