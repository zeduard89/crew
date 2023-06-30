import { useUserById } from '../hooks/useUserById'

interface ProjectAvatarProps {
  creatorId: string
}

export const ProjectAvatar: React.FC<ProjectAvatarProps> = ({ creatorId }) => {
  const { user } = useUserById(creatorId)
  return (
    <>
      <img
        src={user?.avatar}
        alt={user?.id}
        className='h-12 w-12 rounded-full object-cover'
      />
      <div className='ml-2'>
        <h3 className='text-xl font-bold'>
          {user?.name} {user?.lastName}
        </h3>
      </div>
    </>
  )
}
