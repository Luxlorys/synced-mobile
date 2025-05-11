import { GetTaskResponse } from 'api';
import React from 'react';
import { Box, TouchableOpacity, Text } from 'themes';
import { getBasicDate } from 'lib';
import { Icon } from 'ui';
import { TaskStatusBadge } from './TaskStatusBadge';
import { TaskPriorityBadge } from './TaskPriorityBadge';

interface TaskCardProps {
  task: GetTaskResponse;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <TouchableOpacity
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
            {getBasicDate(task.deadline)}
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};
