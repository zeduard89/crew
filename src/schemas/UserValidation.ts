import { z } from 'zod'
const emailRegex =
  /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/

export const UserValidation = z.object({
  updateName: z
    .string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(15, 'El nombre debe tener menos de 15 caracteres'),
  updateLastName: z
    .string()
    .min(3, 'El apellido debe tener al menos 3 caracteres')
    .max(15, 'El apellido debe tener menos de 15 caracteres'),
  updateEmail: z
    .string()
    .min(5, 'El correo electrónico debe tener al menos 5 caracteres')
    .max(30, 'El correo electrónico debe tener menos de 30 caracteres')
    .refine((value) => emailRegex.test(value), {
      message: 'Debe proporcionar un correo electrónico válido',
      path: ['email'],
    }),
  updateCountry: z
    .string()
    .min(3, 'El país debe tener al menos 3 caracteres')
    .max(15, 'El país debe tener menos de 15 caracteres'),
  updateCity: z
    .string()
    .min(3, 'La ciudad debe tener al menos 3 caracteres')
    .max(20, 'La ciudad debe tener menos de 20 caracteres'),
  updateAboutMe: z
    .string()
    .min(20, 'La descripción debe tener al menos 20 caracteres')
    .max(500, 'La descripción debe tener menos de 500 caracteres'),
  updateShortDescription: z
    .string()
    .min(5, 'La descripción corta debe tener al menos 5 caracteres')
    .max(200, 'La descripción corta debe tener menos de 200 caracteres'),
  updateProfilePicture: z.custom<File[]>(
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

export type UserSettingsFormType = z.infer<typeof UserValidation>
