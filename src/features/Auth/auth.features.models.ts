import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const UserRole = z.enum(['Admin', 'Participant']);

export const SelectedUserRoleSchema = z.object({
  id: z.number().int(),
  label: z.string().min(1),
  value: UserRole,
});

export type SelectedUserRole = z.infer<typeof SelectedUserRoleSchema>;

export const SignInFormSchema = z.object({
  email: z.string().email('Wron email format'),
  password: z.string().min(8, 'Password is too short'),
});

export const signInFormResolver = zodResolver(SignInFormSchema);

export type SignInFormType = z.infer<typeof SignInFormSchema>;

export const SignUpSchema = z
  .object({
    email: z.string().email('Wron email format'),
    password: z.string().min(8, 'Password is too short'),
    confirmPassword: z.string().min(8, 'Password is too short'),
    role: SelectedUserRoleSchema,
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Password don't match`,
        path: ['confirmPassword'],
      });
    }
  });

export const signUpFormResolver = zodResolver(SignUpSchema);

export type SignUpForm = z.infer<typeof SignUpSchema>;

export const SignUpAdminSchema = z.object({
  userFullName: z.string().min(5, 'Full name must have at leat 5 characters'),
  companyName: z.string().min(4, 'Company name must have at leat 4 characters'),
  size: z.number().int(),
});

export const signUpAdminFormResolver = zodResolver(SignUpAdminSchema);

export type SignUpAdmin = z.infer<typeof SignUpAdminSchema>;

export const SignUpParticipantSchema = z.object({
  userFullName: z.string().min(5, 'Full name must have at leat 5 characters'),
  inviteCode: z.string().min(4).max(4),
});

export const signUpParticipantFormResolver = zodResolver(
  SignUpParticipantSchema,
);

export type SignUpParticipant = z.infer<typeof SignUpParticipantSchema>;
