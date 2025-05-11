import React from 'react';
import { TaskPriority } from 'api';
import { Box, Text } from 'themes';
import { PRIORITY_EMOJI, PRIORITY_TEXT } from './config';

interface PriorityBadgeProps {
  priority: TaskPriority;
}

export const TaskPriorityBadge = ({ priority }: PriorityBadgeProps) => {
  return (
    <Box flexDirection="row" alignItems="center" gap={4}>
      <Text fontSize="m">{PRIORITY_EMOJI[priority]}</Text>
      <Text
        color="white"
        fontWeight={400}
        fontFamily="GilroyRegular"
        fontSize="base">
        {PRIORITY_TEXT[priority]}
      </Text>
    </Box>
  );
};
