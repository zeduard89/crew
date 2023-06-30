import { FavoritesCarrousel } from '@/components'
import { useUserIdStore } from '@/store'
import { MainCarrousel, PopularCarrousel, TopCategories } from './components'
export const Home: React.FC = () => {
  const { userId } = useUserIdStore()
  return (
    <>
      <MainCarrousel />
      <TopCategories />
      <PopularCarrousel />
      <FavoritesCarrousel
        userId={userId}
        width={'w-3/4'}
        margin={'ml-[12.5%] '}
      />
    </>
  )
}
