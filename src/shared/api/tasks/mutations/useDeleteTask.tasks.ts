import { useMutation } from '@tanstack/react-query';
import { QueryError, queryKeys } from '../../models';
import { TasksService } from '../TasksService';

import { DeleteTaskRequest } from '../models';

export const deleteTaskMutationFnTasksService = async (
  params: DeleteTaskRequest,
) => {
  const response = await TasksService.deleteTask(params);

  return response?.data;
};

const getMutationKey = () => queryKeys.deleteTaskTasksService();

export const useDeleteTaskMutationTasksService = () => {
  return useMutation<void, QueryError, DeleteTaskRequest>({
    mutationFn: deleteTaskMutationFnTasksService,
    mutationKey: getMutationKey(),
  });
};
