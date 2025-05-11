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

import { GetAllTasksResponse } from '../models';

interface HookParams<TData> {
  options?: UseQueryWithOptionsParams<
    GetAllTasksResponse,
    QueryError,
    TData,
    QueryKeyType
  >['options'];
}

export const getAllTasksQueryFnTasksService = async () => {
  const response = await TasksService.getAllTasks();

  return response?.data;
};

const getQueryKey = () => queryKeys.getAllTasksTasksService();

export const getAllTasksQueryTasksService = <
  TData = GetAllTasksResponse,
  TError = QueryError,
>({
  fetchOptions,
}: QueryFetchParams<GetAllTasksResponse, TError, TData, void>) => {
  const queryClient = getQueryClient();

  return queryClient.fetchQuery<
    GetAllTasksResponse,
    TError,
    TData,
    QueryKeyType
  >({
    queryKey: getQueryKey(),
    queryFn: () => getAllTasksQueryFnTasksService(),
    ...fetchOptions,
  });
};

export const useGetAllTasksQueryTasksService = <TData = GetAllTasksResponse>({
  options,
}: HookParams<TData>) => {
  return useQueryWithOptions<
    GetAllTasksResponse,
    QueryError,
    TData,
    QueryKeyType
  >({
    queryFn: getAllTasksQueryFnTasksService,
    queryKey: getQueryKey(),
    options,
  });
};

export const invalidateGetAllTasksQueryTasksService = (
  options?: Omit<InvalidateQueryFilters, 'queryKey'>,
) => {
  const queryClient = getQueryClient();

  return queryClient.invalidateQueries({
    queryKey: getQueryKey(),
    ...options,
  });
};
