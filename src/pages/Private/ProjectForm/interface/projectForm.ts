import { type ProjectFormType } from '@/schemas/ProjectValidation'
import {
  type FieldErrors,
  type UseFormHandleSubmit,
  type UseFormRegister,
} from 'react-hook-form'

export interface IProjectForm {
  register: UseFormRegister<ProjectFormType>
  handleSubmit: UseFormHandleSubmit<ProjectFormType>
  errors: FieldErrors<ProjectFormType>
  isSubmitting: boolean
  onSubmit: (data: ProjectFormType) => void
  isSubmitSuccessful: boolean
}
