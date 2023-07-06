import { ProjectCard } from '@/components'
import { useCreatorProjects } from '@/hooks'
import { useParams } from 'react-router-dom'

import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'

interface CreatorProjectsProps {
  width: string
  margin: string
  userId?: string
}

interface UserParams {
  id: string
}

export const CreatorProjects: React.FC<CreatorProjectsProps> = (props) => {
  const { id: userId } = useParams<keyof UserParams>() as UserParams
  const userIdToUse = props?.userId ?? userId
  const { creatorProjects } = useCreatorProjects(userIdToUse)

  if (creatorProjects !== undefined && creatorProjects.length > 0) {
    return (
      <div>
        <h2 className={`${props.margin}text-2xl font-semibold text-primary`}>
          Projects created by You!
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
          {creatorProjects.map((project) => (
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
