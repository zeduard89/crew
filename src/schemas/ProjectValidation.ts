import { z } from 'zod'

export const ProjectValidation = z.object({
  title: z
    .string()
    .min(3, 'El título debe tener al menos 3 caracteres')
    .max(30, 'El título debe tener menos de 30 caracteres'),
  shortDescription: z
    .string()
    .min(3, 'La descripción corta debe tener al menos 3 caracteres')
    .max(40, 'La descripción corta debe tener menos de 40 caracteres'),
  description: z
    .string()
    .min(10, 'La descripción debe tener al menos 10 caracteres')
    .max(100, 'La descripción debe tener menos de 100 caracteres'),
  fundingGoal: z
    .number()
    .min(1, 'El objetivo de financiación debe ser mayor a 0')
    .max(1000000, 'El objetivo de financiación debe ser menor a 1000000'),
  fundingDayLeft: z
    .number()
    .min(1, 'Los días restantes de financiación deben ser mayor a 0')
    .max(365, 'Los días restantes de financiación deben ser menor a 365'),
  category: z.enum([
    'Tech & Innovation',
    'Creative Works',
    'Community Projects',
  ]),
  location: z.enum(['Argentina'], {
    required_error: 'Debes seleccionar una ubicación',
  }),
  updateProjectPicture: z.custom<File[]>(
    (files) => {
      if (files instanceof FileList) {
        return files
      }
    },
    {
      message: 'Debe proporcionar una imagen',
    }
  ),
})

export type ProjectFormType = z.infer<typeof ProjectValidation>
