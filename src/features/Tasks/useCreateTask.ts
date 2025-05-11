import {
  queryClient,
  queryKeys,
  useCreateTasksMutationTasksService,
  useMutationEvents,
} from 'api';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RouteService, ToastService } from 'services';
import { CreateTaskForm, createTaskFormResolver } from './models';
import {
  PRIORITY_TO_ENUM,
  STATUS_TO_ENUM,
  taskPriorities,
  taskStatuses,
} from './config';

export const useCreateTask = () => {
  const createMutation = useCreateTasksMutationTasksService();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<CreateTaskForm>({
    resolver: createTaskFormResolver,
    defaultValues: {
      deadline: undefined,
      description: '',
      estimatedTime: '',
      priority: 'Low priority',
      status: 'To-Do',
      title: '',
    },
  });

  const handleCreate: SubmitHandler<CreateTaskForm> = async ({
    deadline,
    description,
    estimatedTime,
    priority,
    status,
    title,
  }) => {
    await createMutation.mutateAsync({
      title,
      status: STATUS_TO_ENUM[status],
      deadline,
      description,
      priority: PRIORITY_TO_ENUM[priority],
      estimatedTime: Number(estimatedTime),
      assignedToId: 3,
    });
  };

  useMutationEvents(createMutation, {
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.getAllTasksTasksService(),
      });
      RouteService.goBack();
      ToastService.onSuccess({
        title: `Task '${data.title}' successfully created`,
      });
    },
  });

  return {
    handleCreate: handleSubmit(handleCreate),
    isPending: createMutation.isPending,
    control,
    isValid,
    taskStatuses,
    taskPriorities,
  };
};
