import { LoadingIcon } from '@/assets/LoadingIcon'
import { type LoginProps } from '@/interfaces/AuthModalProps'
import { AuthLoginInput } from '.'
import { useLoginForm } from '../hooks'
import { OAuthButton } from './OAuthButton'

export const Login: React.FC<LoginProps> = ({ setModalAuth }) => {
  const { onSubmit, handleSubmit, isSubmitting, errors, register } =
    useLoginForm()

  return (
    <div className='mt-48 w-full max-w-sm rounded-lg bg-white p-6 shadow-lg'>
      <div className='flex justify-end'>
        <button
          className='right-0 top-0 text-xl duration-300 hover:text-red-700'
          onClick={() => {
            setModalAuth('closed')
          }}
        >
          X
        </button>
      </div>

      <h2 className='mb-1 flex items-center justify-center text-3xl font-bold'>
        Welcome Back!
      </h2>
      <p className='mb-4 flex items-center  justify-center text-gray-600'>
        Log in to continue
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <AuthLoginInput
            label='Email'
            type='email'
            placeholder='Your Email'
            error={errors.email}
            register={register}
            name='email'
          />
          <AuthLoginInput
            label='Password'
            type='password'
            placeholder='Your Password'
            error={errors.password}
            register={register}
            name='password'
          />
        </div>

        <div className='mb-2'>
          <a
            href='#'
            className='flex justify-end text-sm duration-300 hover:text-secondaryDark'
          >
            Forgot your password?
          </a>
        </div>

        <button
          className='mb-5 w-full rounded-md bg-primary px-4 py-2 font-semibold uppercase text-white duration-300 hover:bg-secondaryDark'
          type='submit'
        >
          {isSubmitting && <LoadingIcon />}
          Log In
        </button>
      </form>

      <p className='mb-2 flex justify-center'>
        New to Crew?&nbsp;
        <span
          className='cursor-pointer font-bold
          duration-300 hover:text-secondaryDark
          '
          onClick={() => {
            setModalAuth('register')
          }}
        >
          Sign Up
        </span>
      </p>
      <hr />
      <OAuthButton provider='google' />
    </div>
  )
}
