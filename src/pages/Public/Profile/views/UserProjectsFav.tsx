import { FavoritesCarrousel } from '@/components'
import { useFavoriteProjects } from '@/hooks'
import { useUserIdStore } from '@/store'
import { CreatorProjects } from '../components'

export const UserProjectsFav: React.FC = () => {
  const { userId } = useUserIdStore()
  const { favoriteProjects } = useFavoriteProjects(userId)
  if (favoriteProjects !== undefined && favoriteProjects.length > 0) {
    return (
      <div className='min-h-[680px]'>
        <div className='h-auto'>
          <CreatorProjects width={'w-full'} margin={'mt-2 '} />
        </div>
        <div className='h-auto'>
          <FavoritesCarrousel width={'w-full'} margin={'mt-2 '} />
        </div>
      </div>
    )
  }
  return (
    <div className='h-[400px]'>
      <h2 className='mb-20 mt-16 flex w-full justify-center text-3xl font-semibold text-primary'>
        You are not following any project yet!
      </h2>
    </div>
  )
}
