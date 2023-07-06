import { allProjectsFetcher } from '@/utils'
import { useQuery } from '@tanstack/react-query'
import { type IProject } from '@/interfaces'


interface IUseAllProjects {
  allProjects: IProject[] | undefined
  isLoading: boolean
  error: unknown
}

export const useAllProjects = (): IUseAllProjects => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['allProjects'],
    queryFn: async () =>
      await allProjectsFetcher({ path: 'adminRoute/dashboardAllProjects' }),
  })

  return { allProjects: data, isLoading, error }
}