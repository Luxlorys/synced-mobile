import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const SignInFormSchema = z.object({
  email: z.string().email('Wron email format'),
  password: z.string().min(8, 'Password is too short'),
});

export const signInFormResolver = zodResolver(SignInFormSchema);

export type SignInFormType = z.infer<typeof SignInFormSchema>;
