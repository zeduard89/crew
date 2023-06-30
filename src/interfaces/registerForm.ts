import { type RegisterValidationType } from '@/schemas/RegisterValidation'
import {
  type FieldErrors,
  type UseFormHandleSubmit,
  type UseFormRegister,
} from 'react-hook-form'

export interface IRegisterForm {
  register: UseFormRegister<RegisterValidationType>
  handleSubmit: UseFormHandleSubmit<RegisterValidationType>
  errors: FieldErrors<RegisterValidationType>
  isSubmitting: boolean
  onSubmit: (data: RegisterValidationType) => void
}
