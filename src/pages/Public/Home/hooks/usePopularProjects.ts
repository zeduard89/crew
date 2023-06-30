import { type IProject } from '@/interfaces'
import { projectsFetcher } from '@/utils'
import { useQuery } from '@tanstack/react-query'

interface IUsePopularProjects {
  projects: IProject[] | undefined
  isLoading: boolean
  error: unknown
}

export const usePopularProjects = (): IUsePopularProjects => {
  const { data, isLoading, error } = useQuery<IProject[]>({
    queryKey: ['popularProjects'],
    queryFn: async () =>
      await projectsFetcher({ path: '/projectRoute/twentyMostTrending' }),
  })

  return { projects: data, isLoading, error }
}
