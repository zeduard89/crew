import { type MainCarrouselProject } from '@/data'
import { MainCarrouselInfo } from '.'

interface IMainCarrouselItemProps {
  project: MainCarrouselProject
}

export const MainCarrouselItem: React.FC<IMainCarrouselItemProps> = ({
  project,
}) => {
  return (
    <li className='cursor-pointer' key={project.id}>
      <div className='relative'>
        <div className='absolute h-full w-full bg-black bg-opacity-50' />
        <MainCarrouselInfo project={project} />
        <img
          src={project.mainImage}
          alt={project.title}
          className='h-[450px] w-full object-cover object-bottom'
        />
      </div>
    </li>
  )
}
