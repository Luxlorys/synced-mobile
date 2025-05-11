import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export const TaskStatusEnum = z.enum([
  'TODO',
  'IN_PROGRESS',
  'DONE',
  'BLOCKED',
]);

export const TaskPriorityEnum = z.enum(['LOW', 'MEDIUM', 'HIGH']);

const CreateTaskSchema = z.object({
  title: z.string().min(6, 'Title must have at least 6 characters'),
  description: z
    .string()
    .min(20, 'Description must have at least 20 characters'),
  deadline: z.date({ required_error: 'Deadline is required' }),
  priority: z.string().min(1, 'Task priority is required'),
  status: z.string().min(1, 'Task status is required'),
  estimatedTime: z
    .string()
    .min(1)
    .refine(val => !Number.isNaN(Number(val)) && Number.isInteger(Number(val))),
});

export const createTaskFormResolver = zodResolver(CreateTaskSchema);

export type CreateTaskForm = z.infer<typeof CreateTaskSchema>;
