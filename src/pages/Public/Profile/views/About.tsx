import { type IUser } from '@/interfaces'

interface AboutProps {
  user: IUser | undefined
}
export const About: React.FC<AboutProps> = (props) => {
  return (
    <div className='flex h-auto w-full border border-black'>
      <div className='w-8/12'>
        {/* <img
          src={props.avatar}
          alt='Avatar image'
          className='min-h-[110px] w-auto min-w-[175px] '
        /> */}
      </div>
      <div className='mt-10 w-4/12 text-center text-4xl'>
        <p>About Me</p>
        <p className='mt-5 text-lg'>{props.user?.aboutMe}</p>
      </div>
    </div>
  )
}
