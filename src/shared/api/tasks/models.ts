export type TaskStatusEnum = 'TODO' | 'IN_PROGRESS' | 'DONE' | 'BLOCKED';

export type TaskPriorityEnum = 'LOW' | 'MEDIUM' | 'HIGH';

export interface CreateTaskBody {
  title: string;
  description: string;
  priority: TaskPriorityEnum;
  status: TaskStatusEnum;
  estimatedTime: number;
  deadline: string;
}

export interface GetTaskResponse {
  title: string;
  description: string;
  priority: TaskPriorityEnum;
  status: TaskStatusEnum;
  estimatedTime: number;
  creator: {
    fullName: string;
    email: string;
  };
  company: {
    name: string;
    size: number;
  };
  id: number;
  spentTime: number | null;
  createdAt: Date;
  lastUpdated: Date | null;
  deadline: Date;
}

export interface GetTasksRequest {
  taskId: number;
}

export interface DeleteTaskRequest extends GetTasksRequest {}

export interface PathTaskRequest extends GetTasksRequest {
  title?: string;
  description?: string;
  priority?: TaskPriorityEnum;
  status?: TaskStatusEnum;
  estimatedTime?: number;
  deadline?: string;
  spentTime?: number | null;
}

export interface GetAllTasksResponse {
  tasks: GetTaskResponse[];
}

export interface GetAllTasksQuery {
  skip: number;
  take: number;
}
