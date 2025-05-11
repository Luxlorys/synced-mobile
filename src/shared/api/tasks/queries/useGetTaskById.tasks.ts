import { InvalidateQueryFilters } from '@tanstack/react-query';
import { getQueryClient } from '../../queryClient';
import {
  QueryError,
  QueryKeyType,
  UseQueryWithOptionsParams,
  QueryFetchParams,
  queryKeys,
} from '../../models';
import { useQueryWithOptions } from '../../hooks';
import { TasksService } from '../TasksService';

import { GetTaskResponse, GetTasksRequest } from '../models';

interface HookParams<TData> extends GetTasksRequest {
  options?: UseQueryWithOptionsParams<
    GetTaskResponse,
    QueryError,
    TData,
    QueryKeyType
  >['options'];
}

interface QueryFnParams {
  params: GetTasksRequest;
  meta?: Record<string, unknown> | undefined;
  queryKey?: QueryKeyType;
  signal?: AbortSignal;
}

export const getTaskByIdQueryFnTasksService = async ({
  params,
}: QueryFnParams) => {
  const response = await TasksService.getTaskById(params);

  return response?.data;
};

const getQueryKey = (params: GetTasksRequest) =>
  queryKeys.getTaskByIdTasksService(params);

export const getTaskByIdQueryTasksService = <
  TData = GetTaskResponse,
  TError = QueryError,
>({
  params,
  fetchOptions,
}: QueryFetchParams<GetTaskResponse, TError, TData, GetTasksRequest>) => {
  const queryClient = getQueryClient();

  return queryClient.fetchQuery<GetTaskResponse, TError, TData, QueryKeyType>({
    queryKey: getQueryKey(params),
    queryFn: () => getTaskByIdQueryFnTasksService({ params }),
    ...fetchOptions,
  });
};

export const useGetTaskByIdQueryTasksService = <TData = GetTaskResponse>({
  options,
  ...params
}: HookParams<TData>) => {
  return useQueryWithOptions<GetTaskResponse, QueryError, TData, QueryKeyType>({
    queryFn: () => getTaskByIdQueryFnTasksService({ params }),
    queryKey: getQueryKey(params),
    options,
  });
};

export const invalidateGetTaskByIdQueryTasksService = (
  params: GetTasksRequest,
  options?: Omit<InvalidateQueryFilters, 'queryKey'>,
) => {
  const queryClient = getQueryClient();

  return queryClient.invalidateQueries({
    queryKey: getQueryKey(params),
    ...options,
  });
};
