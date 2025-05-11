import { createApi } from 'api/createApi';
import { baseQuery } from '../baseQuery';
import {
  CreateTaskBody,
  DeleteTaskRequest,
  GetAllTasksResponse,
  GetTaskResponse,
  GetTasksRequest,
  PathTaskRequest,
} from './models';

export const AuthService = createApi({
  baseQuery,
  endpoints: builder => ({
    getAllTasks: builder.get<GetAllTasksResponse, void>({
      query: () => ({
        url: '/task/',
      }),
    }),
    createTasks: builder.post<GetTaskResponse, CreateTaskBody>({
      query: data => ({
        url: '/task/',
        data,
      }),
    }),
    updateTask: builder.patch<GetTaskResponse, PathTaskRequest>({
      query: ({ taskId, ...data }) => ({
        url: `/task/${taskId}`,
        ...data,
      }),
    }),
    deleteTask: builder.delete<void, DeleteTaskRequest>({
      query: ({ taskId }) => ({
        url: `/task/${taskId}`,
      }),
    }),
    getTaskById: builder.get<GetTaskResponse, GetTasksRequest>({
      query: ({ taskId }) => ({
        url: `/task/${taskId}`,
      }),
    }),
  }),
});
