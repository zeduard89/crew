import { type ProjectFormType } from '@/schemas/ProjectValidation'
import { type FieldErrors, type UseFormRegister } from 'react-hook-form'

interface ProjectTextAreaProps {
  label: string
  name: keyof ProjectFormType
  register: UseFormRegister<ProjectFormType>
  errors: FieldErrors<ProjectFormType>
  placeholder: string
}

export const ProjectTextArea: React.FC<ProjectTextAreaProps> = ({
  register,
  errors,
  label,
  placeholder,
  name,
}) => {
  return (
    <div className='mb-4'>
      <label htmlFor={name} className='mb-1 block pl-1 font-bold text-gray-500'>
        {label}:
      </label>
      <textarea
        {...register(name)}
        id={name}
        placeholder={placeholder}
        className='text-md h-20 w-full rounded-md border-2 pl-3 pt-2 outline-none focus:border-secondaryDark'
      />
      {errors[name] != null && (
        <span className='pl-1 text-sm text-red-600'>
          {errors[name]?.message ?? 'Este campo es requerido'}
        </span>
      )}
    </div>
  )
}
