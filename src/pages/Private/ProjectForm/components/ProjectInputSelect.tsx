import { type ProjectFormType } from '@/schemas/ProjectValidation'
import { type FieldErrors, type UseFormRegister } from 'react-hook-form'

interface ProjectInputSelectProps {
  label: string
  name: keyof ProjectFormType
  register: UseFormRegister<ProjectFormType>
  errors: FieldErrors<ProjectFormType>
  defaultOption: string
  options: string[]
}

export const ProjectInputSelect: React.FC<ProjectInputSelectProps> = ({
  name,
  register,
  label,
  errors,
  defaultOption,
  options,
}) => {
  return (
    <div className='mb-4'>
      <label htmlFor={name} className='mb-1 block pl-1 font-bold text-gray-500'>
        {label}:
      </label>
      <select
        {...register(name, { required: true })}
        id={name}
        className='h-10 w-full rounded-md border-2 pl-3 outline-none focus:border-secondaryDark'
      >
        <option value=''>{defaultOption}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {errors[name] != null && (
        <span className='pl-1 text-sm text-red-600'>
          This field is required
        </span>
      )}
    </div>
  )
}
