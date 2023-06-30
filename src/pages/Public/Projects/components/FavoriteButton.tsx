import { useModalAuthStore, useUserIdStore } from '@/store'
import { useFavoriteHandler } from '@/utils'

interface FavoriteButtonProps {
  projectId: string
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  projectId,
}) => {
  const { isFavorite, addFavoriteProject, removeFavoriteProject } =
    useFavoriteHandler({ projectId })
  const { userId } = useUserIdStore()
  const { setModalAuth } = useModalAuthStore()

  return (
    <button
      className={`flex items-center justify-center rounded-md border border-gray-200 px-4 py-2 duration-150 ease-in-out active:scale-95 
      ${
        isFavorite
          ? 'bg-secondaryDark text-white'
          : 'bg-white text-secondaryDark'
      }
      `}
      onClick={() => {
        if (userId === '') {
          setModalAuth('login')
          return
        }
        if (isFavorite) {
          void removeFavoriteProject(projectId)
        } else {
          void addFavoriteProject(projectId)
        }
      }}
    >
      <span className='material-symbols-outlined mr-1 text-sm'>favorite</span>{' '}
      {isFavorite ? 'Following' : 'Follow'}
    </button>
  )
}
