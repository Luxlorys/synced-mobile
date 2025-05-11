import { GetTaskResponse } from 'api';
import React from 'react';
import { Box, TouchableOpacity, Text } from 'themes';
import { getAdvancedDateWithYearFormat } from 'lib';
import { Icon } from 'ui';
import { TaskStatusBadge } from './TaskStatusBadge';
import { TaskPriorityBadge } from './TaskPriorityBadge';

interface TaskCardProps {
  task: GetTaskResponse;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <TouchableOpacity
      backgroundColor="dark_contrast"
      marginTop={8}
      padding={16}
      borderRadius={12}
      borderWidth={1}
      borderColor="primary_500_opacity_20">
      <Box flexDirection="row" alignItems="center">
        <Box flex={1}>
          <Text
            fontSize="xl"
            numberOfLines={1}
            ellipsizeMode="tail"
            color="white"
            fontWeight={600}
            fontFamily="GilroySemiBold">
            {task.title}
          </Text>
        </Box>
        <TaskPriorityBadge priority={task.priority} />
      </Box>
      <Text
        marginTop={8}
        numberOfLines={2}
        ellipsizeMode="tail"
        fontSize="m"
        color="white"
        fontWeight={500}
        fontFamily="GilroyRegular">
        {task.description}
      </Text>
      <Box
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
        marginTop={16}>
        <TaskStatusBadge status={task.status} />
        <Box gap={4} flexDirection="row" alignItems="center">
          <Icon name="calendar" color="white" size={24} />
          <Text
            fontSize="m"
            color="white"
            fontFamily="GilroyMedium"
            fontWeight={500}>
            {getAdvancedDateWithYearFormat(task.deadline)}
          </Text>
        </Box>
      </Box>
      <Text marginTop={16} fontSize="base" color="white">
        Assigned to:{' '}
        <Text textDecorationLine="underline" fontWeight={600}>
          {task.assignedTo.fullName}
        </Text>
      </Text>
    </TouchableOpacity>
  );
};
