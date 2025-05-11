import { useMutation } from '@tanstack/react-query';
import { QueryError, queryKeys } from '../../models';
import { TasksService } from '../TasksService';

import { PathTaskRequest, GetTaskResponse } from '../models';

export const updateTaskMutationFnTasksService = async (
  params: PathTaskRequest,
) => {
  const response = await TasksService.updateTask(params);

  return response?.data;
};

const getMutationKey = () => queryKeys.updateTaskTasksService();

export const useUpdateTaskMutationTasksService = () => {
  return useMutation<GetTaskResponse, QueryError, PathTaskRequest>({
    mutationFn: updateTaskMutationFnTasksService,
    mutationKey: getMutationKey(),
  });
};
