import { CrewApi } from '@/api'
import { images } from '@/data'
import { type IProject } from '@/interfaces'
import { useQuery } from '@tanstack/react-query'

interface IUseProjects {
  projects: IProject[] | undefined
  isLoading: boolean
  error: unknown
}

export const getProjects = async (): Promise<IProject[]> => {
  const { data } = await CrewApi.get<IProject[]>('/projectRoute/allProjects')

  if ('errorMessage' in data) {
    return []
  }

  const projects = data?.map((project, index) => ({
    ...project,
    mainImage: images[index % 4],
  }))

  return projects
}

export const useProjects = (): IUseProjects => {
  const { data, isLoading, error } = useQuery<IProject[]>({
    queryKey: ['projects'],
    queryFn: getProjects,
  })

  return { projects: data, isLoading, error }
}
