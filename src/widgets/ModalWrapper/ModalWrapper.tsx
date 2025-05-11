import React from 'react';
import { UnistylesRuntime } from 'react-native-unistyles';
import { Box } from 'themes';

const { width } = UnistylesRuntime.screen;

interface ModalWrapperProps {
  children: React.ReactNode;
}

export const ModalWrapper = ({ children }: ModalWrapperProps) => {
  return (
    <Box
      backgroundColor="card_background"
      borderRadius={24}
      padding={24}
      width={width - 32}>
      {children}
    </Box>
  );
};
