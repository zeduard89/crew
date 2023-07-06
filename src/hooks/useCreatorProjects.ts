import { type IProject } from '@/interfaces'
import { getCreatorProjects } from '@/utils'
import { useQuery } from '@tanstack/react-query'

// interface CreatorProjectsProps {
//     userId: string
//   }

type IUseCreatorProjects = (userId: string) => {
  creatorProjects: IProject[] | undefined
  isLoading: boolean
  error: unknown
}

export const useCreatorProjects: IUseCreatorProjects = (userId) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['creatorProjects', userId],
    queryFn: async () => await getCreatorProjects({ userId }),
  })

  return {
    creatorProjects: data,
    isLoading,
    error,
  }
}
