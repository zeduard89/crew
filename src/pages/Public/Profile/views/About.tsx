import { type IUser } from '@/interfaces'

interface AboutProps {
  user: IUser | undefined
}
export const About: React.FC<AboutProps> = (props) => {
  return (
    <div className='mb-10 flex h-auto w-full flex-col'>
      <div className='mb-5 mt-10 text-start text-4xl font-extrabold text-primary'>
        <p>About Me</p>
      </div>
      <p className='text-lg'>{props.user?.aboutMe}</p>
    </div>
  )
}
