import { type IProject } from '@/interfaces'
import { projectsFetcher } from '@/utils'
import { useQuery } from '@tanstack/react-query'

interface IUseSearch {
  projects: IProject[] | undefined
  isLoading: boolean
  error: unknown
}

export const useSearch = ({
  params,
}: {
  params: URLSearchParams
}): IUseSearch => {
  const { data, isLoading, error } = useQuery<IProject[]>({
    queryKey: ['searchProjects', params.toString(), params],
    queryFn: async () =>
      await projectsFetcher({ path: '/projectRoute/searchProjects', params }),
  })

  return { projects: data, isLoading, error }
}
