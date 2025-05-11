import { GetAllTasksResponse, GetTaskResponse } from 'api';
import React, { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { isIOS } from 'lib';
import { TaskCard } from './TaskCard';

interface TasksListProps {
  tasks: GetAllTasksResponse;
}

export const TasksList = ({ tasks }: TasksListProps) => {
  const { styles } = useStyles(stylesheet);

  const renderItem: ListRenderItem<GetTaskResponse> = useCallback(
    ({ item }) => <TaskCard task={item} />,
    [],
  );

  const keyExtractor = useCallback((task: GetTaskResponse) => `${task.id}`, []);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={tasks.tasks}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const stylesheet = createStyleSheet((_, runtime) => ({
  listContainer: {
    flexGrow: 1,
    paddingTop: 24,
    paddingBottom: isIOS ? runtime.insets.bottom + 100 : 100,
  },
}));
