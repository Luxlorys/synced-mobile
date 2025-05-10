import React, { FC } from 'react';
import { Box, Colors, Text } from 'themes';
import { UnistylesRuntime } from 'react-native-unistyles';
import { IconName } from 'assets/resources/selection.json';
import { Icon } from '../Icon/Icon';
import type { ToastTypes } from './ToastMessage';

interface ToastBaseProps {
  type: ToastTypes;
  title?: string;
}

const iconNames: Record<ToastTypes, IconName> = {
  success: 'all-done',
  danger: 'close',
  warning: 'alert-triangle',
  info: 'alert-triangle',
};

const iconColors: Record<ToastTypes, keyof typeof Colors> = {
  success: 'primary_500',
  danger: 'red_500',
  warning: 'brand_orange',
  info: 'brand_orange',
};

const screenWidth = UnistylesRuntime.screen.width;

export const ToastBase: FC<ToastBaseProps> = ({ type, title }) => {
  return (
    <Box
      width={screenWidth - 32}
      borderRadius={4}
      padding={16}
      alignItems="center"
      flexDirection="row"
      borderLeftWidth={8}
      borderLeftColor={iconColors[type]}
      backgroundColor="dark_contrast">
      <Box flex={1} flexDirection="row" gap={8}>
        <Icon
          name={iconNames[type] as string}
          size={20}
          color={iconColors[type]}
        />

        <Box flex={1}>
          {!!title && (
            <Text fontFamily="PoppinsMedium" fontSize="m" color="white">
              {title}
            </Text>
          )}
        </Box>
      </Box>
    </Box>
  );
};
