import { TaskPriority, TaskStatus } from 'api';
import { Colors } from 'themes/ui/types';

export const PRIORITY_TEXT: Record<TaskPriority, string> = {
  HIGH: 'hight',
  LOW: 'low',
  MEDIUM: 'medium',
};

export const STATUS_TEXT: Record<TaskStatus, string> = {
  BLOCKED: 'blocked',
  DONE: 'done',
  IN_PROGRESS: 'in progress',
  TODO: 'todo',
};

export const STATUS_BORDER_COLOR: Record<TaskStatus, Colors> = {
  BLOCKED: 'red_500',
  DONE: 'primary_500',
  IN_PROGRESS: 'primary_500',
  TODO: 'white_20_opacity',
};

export const STATUS_EMOJI: Record<TaskStatus, string> = {
  BLOCKED: '⛔',
  DONE: '✅',
  IN_PROGRESS: '🔧',
  TODO: '📝',
};

export const PRIORITY_TEXT_COLOR: Record<TaskPriority, Colors> = {
  HIGH: 'red_500',
  LOW: 'white',
  MEDIUM: 'primary_500_opacity_40',
};

export const PRIORITY_EMOJI: Record<TaskPriority, string> = {
  HIGH: '🔴',
  LOW: '🟢',
  MEDIUM: '🟡',
};
