import { type ProjectCardType } from '@/data'
import { PublicRoutes } from '@/router/RouterProvider'
import { numberToUSD } from '@/utils'
import { useNavigate } from 'react-router-dom'
import { FavoriteButton } from '.'

interface ProjectCardProps {
  project: ProjectCardType
}

export const CategoryRedirect = {
  'Tech & Innovation': `${PublicRoutes.search}?category=Tech+%26+Innovation`,
  'Creative Works': `${PublicRoutes.search}?category=Creative+Works`,
  'Community Projects': `${PublicRoutes.search}?category=Community+Projects`,
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Extraer solo las URLs de las imágenes y asignarlas a la propiedad mainImage
  const mainImageUrls = project.projectImages?.map((image) => image.url) ?? []

  const navigate = useNavigate()
  return (
    <li className='h-[650px] w-72 cursor-default py-8'>
      <div className='group flex h-full flex-col rounded-2xl border shadow-md duration-300 hover:scale-95 hover:shadow-xl'>
        <div
          className='h-1/2 cursor-pointer'
          onClick={() => {
            navigate(`${PublicRoutes.projects}/${project.id}`)
          }}
        >
          <img
            className='h-full w-full rounded-t-2xl object-cover'
            src={mainImageUrls[0]}
            alt={project.title}
          />
        </div>
        <div className='mx-4 mt-4'>
          <div className='flex justify-between'>
            <p className='text-sm font-bold uppercase text-secondaryDark'>
              Funding
            </p>
            <FavoriteButton projectId={project.id} />
          </div>
          <div
            className='cursor-pointer'
            onClick={() => {
              navigate(`${PublicRoutes.projects}/${project.id}`)
            }}
          >
            <h3 className='mb-1 mt-2 text-xl font-semibold duration-1000'>
              {project.title}
            </h3>
            <p className='h-[60px] overflow-hidden text-sm'>
              {project.description.length > 99
                ? project.description.slice(0, 99).concat('...')
                : project.description}
            </p>
          </div>
          <div
            className='my-2 cursor-pointer'
            onClick={() => {
              navigate(CategoryRedirect[project.category])
            }}
          >
            <span className='mr-2 mt-2 inline-block rounded-full bg-secondaryDark px-2 py-1 text-xs font-semibold text-white duration-300 hover:scale-105'>
              {project.category}
            </span>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center justify-center'>
                <span className='text-lg font-semibold uppercase'>
                  {numberToUSD(project.fundingCurrent)}
                </span>
                <p className='ml-2 text-xs font-semibold uppercase text-gray-500'>
                  ARG
                </p>
              </div>
              <p className='text-sm font-semibold uppercase text-gray-500'>
                {Math.floor(project.fundingPercentage)}%
              </p>
            </div>
            <div className='relative pt-1'>
              <div className='mb-4 flex h-2 overflow-hidden rounded bg-gray-200 text-xs'>
                <div
                  style={{ width: `${project.fundingPercentage}%` }}
                  className='flex flex-col justify-center whitespace-nowrap bg-pink-300 text-center text-white shadow-none'
                />
              </div>
            </div>
          </div>

          <div>
            <div className='flex items-center justify-end'>
              <div className='flex items-center justify-center'>
                <span className='text-lg font-semibold uppercase'>
                  {project.fundingDayLeft}
                </span>
                <p className='ml-1 text-xs font-semibold uppercase text-gray-500'>
                  Days left
                </p>
              </div>
              <span className='material-symbols-outlined ml-2 text-secondaryDark'>
                schedule
              </span>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
