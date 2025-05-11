import React from 'react';
import { useSelectUserName, useSelectUserRole } from 'stores';
import { Box, Text } from 'themes';
import { Icon } from 'ui';

export const UserInfoHeader = () => {
  const username = useSelectUserName();
  const role = useSelectUserRole();

  return (
    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
      <Box gap={6} alignItems="center" flexDirection="row">
        <Icon name="person" size={24} color="white_80_opacity" />
        <Text
          color="white_80_opacity"
          fontWeight="500"
          fontFamily="GilroyMedium"
          fontSize="xl">
          {username}
        </Text>
      </Box>
      <Text
        color="white_80_opacity"
        fontWeight="500"
        fontFamily="GilroyMedium"
        fontSize="xl">
        {role}
      </Text>
    </Box>
  );
};
