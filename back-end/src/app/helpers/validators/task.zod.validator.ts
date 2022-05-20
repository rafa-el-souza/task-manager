import { z } from 'zod';

export const zodCreateTaskSchema = z.object({
  name: z.string({
    required_error: 'name is required',
    invalid_type_error: 'name must be a string',
  }).min(3, { message: 'name must be 3 or more characters long' }),

  description: z.optional(z.string({
    invalid_type_error: 'description must be a string',
  })),

  status: z.optional(z.enum(['pendente', 'andamento', 'pronto'])),
});

export const zodUpdateTaskSchema = z.object({
  name: z.optional(z.string({
    invalid_type_error: 'name must be a string',
  }).min(3, { message: 'name must be 3 or more characters long' })),

  description: z.optional(z.string({
    invalid_type_error: 'description must be a string',
  })),

  status: z.optional(z.enum(['pendente', 'andamento', 'pronto'])),
});

export type ZodTask = z.infer<typeof zodCreateTaskSchema>;
