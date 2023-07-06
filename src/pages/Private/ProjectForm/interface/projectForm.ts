import { type ProjectFormType } from '@/schemas/ProjectValidation'
import {
  type UseFormReset,
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
  reset: UseFormReset<{
    title: string;
    shortDescription: string;
    description: string;
    fundingGoal: number;
    fundingDayLeft: number;
    category: "Tech & Innovation" | "Creative Works" | "Community Projects";
    location: "Argentina";
    updateProjectPicture: File[];
}>
}
