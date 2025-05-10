import { z } from 'zod';

export const ErrorSchema = z.object({
  message: z.string(),
  statusCode: z.number(),
  code: z.string(),
  error: z.string(),
});

type ErrorType = {
  response: {
    data: {
      message: string;
      code: string;
      statusCode: number;
      error: string;
    };
  };
};

const errorResolver = (error: unknown) => {
  const typedError = error as ErrorType;

  return typedError.response.data.message;
};

export const ExceptionService = {
  errorResolver,
};
