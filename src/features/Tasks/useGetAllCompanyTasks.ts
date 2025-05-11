import { useGetAllTasksQueryTasksService } from 'api';

export const useGetAllCompanyTasks = () => {
  const { data, isLoading } = useGetAllTasksQueryTasksService({});

  return {
    data,
    isLoading,
  };
};
