import React from 'react';
// eslint-disable-next-line
import { RouteService } from 'services';
import { Box, Text, TouchableOpacity } from 'themes';
import { Icon } from 'ui';

interface MainHeaderProps {
  onBack?: () => void;
  title?: string;
  withoutBack?: boolean;
}

export const BaseHeader = ({
  onBack,
  title,
  withoutBack = false,
}: MainHeaderProps) => {
  return (
    <Box flexDirection="row" alignItems="center" justifyContent="space-between">
      {withoutBack ? (
        <Box width={50} height={50} />
      ) : (
        <TouchableOpacity onPress={onBack || RouteService.goBack}>
          <Icon name="arrow-ios-left" size={24} color="white" />
        </TouchableOpacity>
      )}
      <Text
        color="white"
        fontSize="xxl"
        fontFamily="GilroyMedium"
        fontWeight="500">
        {title}
      </Text>
      <Box width={50} height={50} />
    </Box>
  );
};
