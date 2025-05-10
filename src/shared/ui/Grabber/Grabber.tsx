import React from 'react';
import { Box } from 'themes';

const Grabber = () => {
  return (
    <Box
      position="relative"
      alignItems="center"
      justifyContent="center"
      width="100%">
      <Box width={40} height={4} borderRadius={4} backgroundColor="basic_600" />
    </Box>
  );
};

export { Grabber };
