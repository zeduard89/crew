import { type MainCarrouselProject } from '@/data'
import { Link } from 'react-router-dom'

interface IMainCarrouselInfoProps {
  project: MainCarrouselProject
}

export const MainCarrouselInfo: React.FC<IMainCarrouselInfoProps> = ({
  project,
}) => {
  return (
    <div className='absolute ml-[calc(7.5%+2rem)] mt-64 text-xl text-white'>
      <div className='absolute top-0 h-full w-full scale-110 rounded bg-white bg-opacity-10 drop-shadow-lg ' />
      <div className='relative'>
        <h2 className='text-2xl font-semibold'>{project.title}</h2>
        <p className='pb-3 pt-1 text-base'>{project.shortDescription}</p>
        <Link to='#' className='text-sm font-bold hover:underline'>
          See Project
        </Link>
      </div>
    </div>
  )
}
