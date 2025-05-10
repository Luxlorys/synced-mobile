import React from 'react';
import { Box, Text } from 'themes';
import { AuthWrapper } from 'widgets';

export const Auth: React.FC = () => {
  return (
    <AuthWrapper>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text>Synced App</Text>
      </Box>
    </AuthWrapper>
  );
};
