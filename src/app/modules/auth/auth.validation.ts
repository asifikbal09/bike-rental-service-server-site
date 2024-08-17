import { z } from 'zod';

const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required.' }),
    email: z
      .string({ required_error: 'Email is required.' })
      .email({ message: 'Please give a valid email.' }),
    password: z.string({ required_error: 'Password is required.' }),
    phone: z.string({ required_error: 'Phone number is required.' }),
    address: z.string({ required_error: 'Address is required.' }),
    role: z.enum(['admin', 'user']),
  }),
});

const loginUserValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email is required.' }).email(),
    password: z.string({ required_error: 'Password is required.' }),
  }),
});

export const AuthValidations = {
  createUserValidationSchema,
  loginUserValidationSchema,
};
