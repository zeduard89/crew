import { type UserSettingsFormType } from '@/schemas/UserValidation'
import { type FieldError, type UseFormRegister } from 'react-hook-form'

interface SettingsFormInputProps {
  label: string
  name: keyof UserSettingsFormType
  type: string
  placeholder: string
  error: FieldError | undefined
  register: UseFormRegister<UserSettingsFormType>
  children?: React.ReactNode
}

export const SettingsFormInput: React.FC<SettingsFormInputProps> = ({
  label,
  name,
  type,
  placeholder,
  register,
  error,
}) => {
  return (
    <div className='mb-4 flex flex-col'>
      <label
        htmlFor='name'
        className='mb-2 block text-lg font-bold text-gray-500'
      >
        {label}
        <span className='text-red-500'>*</span>:
      </label>
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className='w-[520px] rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none'
      />
      {error != null && (
        <span className='ml-3 text-sm font-semibold text-red-600'>
          {error.message ?? 'This field is required'}
        </span>
      )}
    </div>
  )
}
