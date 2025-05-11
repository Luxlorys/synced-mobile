import { useMutation } from '@tanstack/react-query';
import { QueryError, queryKeys } from '../../models';
import { TasksService } from '../TasksService';

import { CreateTaskBody, GetTaskResponse } from '../models';

export const createTasksMutationFnTasksService = async (
  params: CreateTaskBody,
) => {
  const response = await TasksService.createTasks(params);

  return response?.data;
};

const getMutationKey = () => queryKeys.createTasksTasksService();

export const useCreateTasksMutationTasksService = () => {
  return useMutation<GetTaskResponse, QueryError, CreateTaskBody>({
    mutationFn: createTasksMutationFnTasksService,
    mutationKey: getMutationKey(),
  });
};
