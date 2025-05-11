export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE' | 'BLOCKED';

export type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH';

export interface CreateTaskBody {
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  estimatedTime: number;
  deadline: string;
}

export interface GetTaskResponse {
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
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
  createdAt: string;
  lastUpdated: string | null;
  deadline: string;
}

export interface GetTasksRequest {
  taskId: number;
}

export interface DeleteTaskRequest extends GetTasksRequest {}

export interface PathTaskRequest extends GetTasksRequest {
  title?: string;
  description?: string;
  priority?: TaskPriority;
  status?: TaskStatus;
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
