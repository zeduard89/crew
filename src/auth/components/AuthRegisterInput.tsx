import { type FieldError, type UseFormRegister } from 'react-hook-form'

interface AuthRegisterInputProps {
  label: string
  name: 'email' | 'password' | 'firstName' | 'lastName'
  type: string
  placeholder: string
  error: FieldError | undefined
  register: UseFormRegister<{
    email: string
    password: string
    firstName: string
    lastName: string
  }>
}

export const AuthRegisterInput: React.FC<AuthRegisterInputProps> = ({
  label,
  type,
  placeholder,
  register,
  name,
  error,
}) => {
  return (
    <div className='mb-2 last:mb-0'>
      <label
        htmlFor={label}
        className='block pl-1 text-sm font-semibold text-gray-500'
      >
        {label}
      </label>
      <input
        id={label}
        type={type}
        className='duration-30 h-10 w-full rounded-md border-2 pl-3 text-sm outline-none focus:border-secondaryDark'
        placeholder={placeholder}
        {...register(name)}
      />
      {error != null && (
        <p className='ml-1 text-sm font-semibold text-red-600'>
          {error?.message}
        </p>
      )}
    </div>
  )
}
