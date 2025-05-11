import React from 'react';
import { TaskStatus } from 'api';
import { Box, Text } from 'themes';
import { STATUS_BORDER_COLOR, STATUS_EMOJI, STATUS_TEXT } from './config';

interface PriorityBadgeProps {
  status: TaskStatus;
}

export const TaskStatusBadge = ({ status }: PriorityBadgeProps) => {
  return (
    <Box
      paddingHorizontal={12}
      paddingVertical={6}
      borderRadius={8}
      borderWidth={1}
      alignSelf="flex-start"
      flexDirection="row"
      alignItems="center"
      gap={4}
      borderColor={STATUS_BORDER_COLOR[status]}>
      <Text fontSize="m">{STATUS_EMOJI[status]}</Text>
      <Text
        color="white"
        fontWeight={400}
        fontFamily="GilroyRegular"
        fontSize="base">
        {STATUS_TEXT[status]}
      </Text>
    </Box>
  );
};
