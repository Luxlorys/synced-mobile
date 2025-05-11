export type Endpoints =
  | '/auth/sign-in'
  | '/auth/sign-up'
  | '/auth/update-password'
  | `/company/${number}`
  | `/company/delete-participant`
  | `/task/${number}`
  | `/task/`
  | `/task-comment/`
  | `/task-comment/${number}`
  | `/user/${number}`
  | `/user/tasks/${number}`;
