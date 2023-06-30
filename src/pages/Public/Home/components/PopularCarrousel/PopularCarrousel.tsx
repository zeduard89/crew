import { ProjectCard } from '@/components'
import { usePopularProjects } from '../../hooks'

export const PopularCarrousel: React.FC = () => {
  const { projects } = usePopularProjects()

  return (
    <div className='flex flex-col items-center justify-center pb-12 pt-6'>
      <p className='text-3xl font-bold'>Popular Projects</p>
      <ul className='flex w-full flex-wrap items-center justify-center gap-8'>
        {projects?.length === 0 ? (
          <div className='mb-10 mt-20 flex flex-col'>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-4xl font-medium'>No Results Found</h1>
              <p className='text-xl'>
                No projects have been created yet. Be the first one to create
                one!
              </p>
            </div>
          </div>
        ) : (
          projects?.map((project, index) => {
            if (index > 9) return undefined
            return <ProjectCard key={project.id} project={project} />
          })
        )}
      </ul>
    </div>
  )
}
