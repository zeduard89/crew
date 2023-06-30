import { ProjectCard } from '@/components'
import { useFavoriteProjects } from '@/hooks'
import { useParams } from 'react-router-dom'

import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'

interface FavoritesCarrouselProps {
  width: string
  margin: string
  userId?: string
}

interface UserParams {
  id: string
}

export const FavoritesCarrousel: React.FC<FavoritesCarrouselProps> = (
  props
) => {
  const { id: userId } = useParams<keyof UserParams>() as UserParams
  const userIdToUse = props?.userId ?? userId
  const { favoriteProjects } = useFavoriteProjects(userIdToUse)

  if (favoriteProjects !== undefined && favoriteProjects.length > 0) {
    return (
      <div>
        <h2 className={`${props.margin}text-3xl`}>
          Projects you are following
        </h2>
        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          navigation={{
            enabled: true,
          }}
          spaceBetween={20}
          className={`flex ${props.width} items-center justify-center`}
        >
          {favoriteProjects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  }

  return null
}
