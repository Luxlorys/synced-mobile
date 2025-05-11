import { TaskPriority, TaskStatus } from 'api';

export const taskPriorities = [
  'Low priority',
  'Medium priority',
  'High priority',
];

export const taskStatuses = ['To-Do', 'In Progress', 'Done', 'Blocked'];

export const PRIORITY_TO_ENUM: Record<string, TaskPriority> = {
  'Low priority': 'LOW',
  'Medium priority': 'MEDIUM',
  'High priority': 'HIGH',
};

export const STATUS_TO_ENUM: Record<string, TaskStatus> = {
  'To-Do': 'TODO',
  'In Progress': 'IN_PROGRESS',
  Done: 'DONE',
  Blocked: 'BLOCKED',
};
