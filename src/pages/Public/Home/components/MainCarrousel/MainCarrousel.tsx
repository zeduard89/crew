import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { MainCarrouselInfo } from './components'
import { useEffect, useState } from 'react'
import { CrewApi } from '@/api'
import { type IProject } from '@/interfaces'
//! ----

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

//!  --

export const MainCarrousel: React.FC = (): JSX.Element => {
  const [projects, setProjects] = useState<IProject[]>([])

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const { data } = await CrewApi.get<IProject[]>(
          '/projectRoute/fiveMostFunding'
        )
        const updatedProjects =
          data?.map((project) => {
            const mainImageUrls =
              project.projectImages?.map((image: any) => image.url) ?? []
            return {
              ...project,
              mainImage: mainImageUrls[0],
            }
          }) ?? []
        setProjects(updatedProjects)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData().catch((error) => {
      console.error('Unhandled error:', error)
    })
  }, [])

  return (
    <div>
      {projects.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          slidesPerView={1}
          navigation={{
            enabled: true,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 3000 }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className='relative h-[500px] w-full'>
                <div className='absolute h-full w-full bg-black bg-opacity-50' />
                <MainCarrouselInfo project={project} />
                <img
                  src={project.mainImage}
                  alt={project.title}
                  className='h-full w-full object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className='flex h-[500px] w-screen items-center justify-center overflow-hidden'>
          <div className='text-6xlxl absolute text-white'>
            <div className='absolute top-0 h-full w-full scale-110 rounded bg-white bg-opacity-20 drop-shadow-lg ' />
            <div className='relative '>
              <h2 className='flex items-center justify-center text-6xl font-medium'>
                Crew Projects
              </h2>
              <p className='pb-3 pt-1 text-xl'>
                {`Something went wrong. No projects available`}
              </p>
            </div>
          </div>
          <img
            src='https://images.wallpaperscraft.com/image/single/coast_sea_rock_960168_3840x2400.jpg'
            alt='Image crew pa!'
          />
        </div>
      )}
    </div>
  )
}
