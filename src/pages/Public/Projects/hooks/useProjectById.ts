import { type IProject } from '@/interfaces'
import { getProjectById } from '@/utils'
import { useQuery } from '@tanstack/react-query'

interface IUseProjectById {
  project: IProject | undefined
  isLoading: boolean
  error: unknown
}

export const useProjectById = (id: string): IUseProjectById => {
  const { data, isLoading, error } = useQuery<IProject | undefined>({
    queryKey: ['project', id],
    queryFn: async () => await getProjectById(id),
  })

  return { project: data, isLoading, error }
}
