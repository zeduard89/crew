import { type LoginValidationType } from '@/schemas/LoginValidation'
import {
  type FieldErrors,
  type UseFormHandleSubmit,
  type UseFormRegister,
} from 'react-hook-form'

export interface ILoginForm {
  register: UseFormRegister<LoginValidationType>
  handleSubmit: UseFormHandleSubmit<LoginValidationType>
  errors: FieldErrors<LoginValidationType>
  isSubmitting: boolean
  onSubmit: (data: LoginValidationType) => void
}
