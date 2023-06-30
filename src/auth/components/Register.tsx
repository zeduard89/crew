import { LoadingIcon } from '@/assets/LoadingIcon'
import { type RegisterProps } from '@/interfaces'
import { AuthRegisterInput, OAuthButton } from '.'
import { useRegisterForm } from '../hooks/useRegisterForm'

export const Register: React.FC<RegisterProps> = ({ setModalAuth }) => {
  const { onSubmit, handleSubmit, isSubmitting, errors, register } =
    useRegisterForm()
  return (
    <main className='mt-40 w-full max-w-sm rounded-lg bg-white p-6 shadow-lg'>
      <section className='flex justify-end'>
        <button
          className='right-0 top-0 text-xl duration-300 hover:text-red-700'
          onClick={() => {
            setModalAuth('closed')
          }}
        >
          X
        </button>
      </section>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className='mb-1 flex items-center justify-center text-3xl font-bold'>
          Welcome!
        </h2>
        <p className='mb-4 flex items-center  justify-center text-gray-600'>
          Sign up to join Crew
        </p>

        <AuthRegisterInput
          label='First Name'
          type='text'
          placeholder='Your First Name'
          name='firstName'
          error={errors.firstName}
          register={register}
        />

        <AuthRegisterInput
          label='Last Name'
          type='text'
          placeholder='Your Last Name'
          name='lastName'
          error={errors.lastName}
          register={register}
        />

        <AuthRegisterInput
          label='Email'
          type='email'
          placeholder='Your Email'
          name='email'
          error={errors.email}
          register={register}
        />

        <AuthRegisterInput
          label='Password'
          type='password'
          placeholder='Your Password'
          name='password'
          error={errors.password}
          register={register}
        />

        <section className='mt-6 flex pl-1 align-baseline text-sm'>
          <div>
            <input
              type='checkbox'
              className='mr-1 h-4 w-5'
              id='Terms'
              required
            />
          </div>
          <label htmlFor='Terms'>
            I agree to the{' '}
            <span className='cursor-pointer font-bold duration-300 hover:text-secondaryDark'>
              Terms of Use
            </span>{' '}
            and have read and understand the{' '}
            <span className='cursor-pointer font-bold duration-300 hover:text-secondaryDark'>
              Privacy Policy
            </span>
          </label>
        </section>

        <button className='mb-2 mt-4 h-10 w-full rounded-md bg-primary px-4 py-2 text-sm font-semibold uppercase text-white duration-300 hover:bg-secondaryDark'>
          {isSubmitting && <LoadingIcon />}
          Create Account
        </button>
      </form>
      <p className='mb-2 flex justify-center pt-1'>
        Already have an account?&nbsp;
        <span
          className='cursor-pointer font-bold duration-300 hover:text-secondaryDark'
          onClick={() => {
            setModalAuth('login')
          }}
        >
          Log In
        </span>
      </p>
      <hr />
      <OAuthButton provider='google' />
    </main>
  )
}
