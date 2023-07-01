import { CrewApi } from '@/api'
import { images } from '@/data'
import { type IProject } from '@/interfaces'

interface IProjectError {
  errorMessage: string
}

interface IProjectsProps {
  path: string
  params?: URLSearchParams
}

type IProjectsFetcher = (props: IProjectsProps) => Promise<IProject[] | []>

export const projectsFetcher: IProjectsFetcher = async ({ path, params }) => {
  const { data } = await CrewApi.get<IProject[] | IProjectError>(path, {
    params,
  })

  if ('errorMessage' in data) {
    return []
  }

  const projects = data?.map((project) => ({
    ...project,
    // mainImage: images[Math.floor(Math.random() * images.length)],
  }))

  return projects
}
