import { type IProject } from '@/interfaces'
import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

interface IProjectSliderProps {
  project: IProject
}

export const ProjectSlider: React.FC<IProjectSliderProps> = ({ project }) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      navigation={{
        enabled: true,
      }}
      autoplay={{ delay: 3000 }}
      className='w-3/5'
    >
      {project?.images?.map((image) => (
        <SwiperSlide key={image}>
          <div className='flex h-full items-center justify-center'>
            <img
              src={image}
              alt={image}
              className='w-1/2 rounded-2xl object-cover'
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
