import { FavoritesCarrousel } from '@/components'
import { useFavoriteProjects } from '@/hooks'
import { useUserIdStore } from '@/store'

export const UserProjectsFav: React.FC = () => {
  const { userId } = useUserIdStore()
  const { favoriteProjects } = useFavoriteProjects(userId)
  if (favoriteProjects !== undefined && favoriteProjects.length > 0) {
    return (
      <div>
        <FavoritesCarrousel width={'w-full'} margin={'mt-5 '} />
      </div>
    )
  }
  return (
    <div>
      <h2 className='mb-20 mt-16 flex w-full justify-center text-3xl font-semibold'>
        You are not following any project yet!
      </h2>
    </div>
  )
}
