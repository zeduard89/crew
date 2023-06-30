import { type ProjectFormType } from '@/schemas/ProjectValidation'
import { type FieldErrors, type UseFormRegister } from 'react-hook-form'

interface ProjectInputProps {
  label: string
  name: keyof ProjectFormType
  type: string
  placeholder: string
  register: UseFormRegister<ProjectFormType>
  errors: FieldErrors<ProjectFormType>
  defaultValue?: string
}

export const ProjectInput: React.FC<ProjectInputProps> = ({
  name,
  type,
  placeholder,
  register,
  label,
  errors,
  defaultValue,
}) => {
  return (
    <div className='mb-4'>
      <label htmlFor={name} className='mb-1 block pl-1 font-bold text-gray-500'>
        {label}:
      </label>
      <input
        className='text-md h-10 w-full rounded-md border-2 pl-3 outline-none focus:border-secondaryDark'
        id={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(name, {
          valueAsNumber: type === 'number',
        })}
      />
      {errors[name] != null && (
        <span className='ml-1 text-sm font-semibold text-red-600'>
          {errors[name]?.message ?? 'This field is required'}
        </span>
      )}
    </div>
  )
}
