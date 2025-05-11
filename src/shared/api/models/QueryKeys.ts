import { TASKS_QUERY_KEYS } from '../tasks/QueryKeys';
import { AUTH_QUERY_KEYS } from '../auth/QueryKeys';

export const queryKeys = {
  ...TASKS_QUERY_KEYS,
  ...AUTH_QUERY_KEYS,
};

export type QueryKeyType = ReturnType<
  (typeof queryKeys)[keyof typeof queryKeys]
>;
