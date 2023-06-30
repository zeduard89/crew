import { z } from 'zod'

export const RegisterValidation = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email(),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export type RegisterValidationType = z.infer<typeof RegisterValidation>
