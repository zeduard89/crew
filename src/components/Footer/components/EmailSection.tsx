export const EmailSection: React.FC = () => {
  return (
    <div className='w-full max-w-xs '>
      <span className='material-symbols-outlined mb-1 flex select-none justify-center text-6xl text-primary'>
        mail
      </span>
      <h3 className='text-center text-lg font-bold'>Find it first on Crew</h3>
      <p className='mb-10 text-center'>
        Discover new and clever products in the Crew newsletter
      </p>
      <input
        type='email'
        placeholder='Your email address'
        className='mb-5 h-12 w-full border pl-4'
      />

      <div className='flex'>
        <input type='checkbox' className='mr-3 h-9 w-9' id='agree' />
        <label htmlFor='agree'>
          I agree to the{' '}
          <span className='cursor-pointer font-semibold duration-150 hover:text-secondaryDark'>
            Terms of Use
          </span>{' '}
          and have read and understand the{' '}
          <span className='cursor-pointer font-semibold duration-150 hover:text-secondaryDark'>
            Privacy Policy
          </span>
        </label>
      </div>
      <button className='mt-5 h-12 w-full rounded-md bg-primary font-bold uppercase text-white duration-300 hover:bg-secondaryDark'>
        Sign Me Up
      </button>
    </div>
  )
}
