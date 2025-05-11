import { GetTasksRequest } from './models';

const QUERY_KEYS = {
  GET_ALL_TASKS_TASKS_SERVICE: 'GET_ALL_TASKS_TASKS_SERVICE',
  GET_TASK_BY_ID_TASKS_SERVICE: 'GET_TASK_BY_ID_TASKS_SERVICE',
  CREATE_TASKS_TASKS_SERVICE: 'CREATE_TASKS_TASKS_SERVICE',
  UPDATE_TASK_TASKS_SERVICE: 'UPDATE_TASK_TASKS_SERVICE',
  DELETE_TASK_TASKS_SERVICE: 'DELETE_TASK_TASKS_SERVICE',
} as const;

export const TASKS_QUERY_KEYS = {
  getAllTasksTasksService: (params: void) =>
    [QUERY_KEYS.GET_ALL_TASKS_TASKS_SERVICE, params] as const,
  getTaskByIdTasksService: (params: GetTasksRequest) =>
    [QUERY_KEYS.GET_TASK_BY_ID_TASKS_SERVICE, params] as const,
  createTasksTasksService: () =>
    [QUERY_KEYS.CREATE_TASKS_TASKS_SERVICE] as const,
  updateTaskTasksService: () => [QUERY_KEYS.UPDATE_TASK_TASKS_SERVICE] as const,
  deleteTaskTasksService: () => [QUERY_KEYS.DELETE_TASK_TASKS_SERVICE] as const,
};
