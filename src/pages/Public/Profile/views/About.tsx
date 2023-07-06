import { type IUser } from '@/interfaces'

interface AboutProps {
  user: IUser | undefined
}
export const About: React.FC<AboutProps> = (props) => {
  console.log(props.user?.aboutMe)

  return (
    <div className='mb-10 flex h-[400px] w-full flex-col'>
      <div className='mb-5 mt-10 text-start text-4xl font-extrabold text-primary'>
        <p>About Me</p>
      </div>
      {props.user?.aboutMe != null ? (
        <p className='text-lg'>{props.user?.aboutMe}</p>
      ) : (
        <p className='text-lg'>{`Hi! I'm ${
          props.user?.name != null ? props.user?.name : ''
        }. I have to update the about me on settings :)`}</p>
      )}
    </div>
  )
}
