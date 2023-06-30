import { CrewApi } from '@/api'
import { type IProject } from '@/interfaces'
import { getFavoriteProjects } from '@/utils'
import { useQuery, useQueryClient } from '@tanstack/react-query'

export interface FavoriteProjectsProps {
  userId: string
}

export type IUseFavoriteProjects = (userId: string) => {
  favoriteProjects: IProject[] | undefined
  addFavoriteProject: (projectId: string) => Promise<void>
  removeFavoriteProject: (projectId: string) => Promise<void>
  isLoading: boolean
  error: unknown
}

export const useFavoriteProjects: IUseFavoriteProjects = (userId) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['favoriteProjects', userId],
    queryFn: async () => await getFavoriteProjects({ userId }),
  })

  const queryClient = useQueryClient()

  const addFavoriteProject = async (projectId: string): Promise<void> => {
    if (userId === undefined) return
    await CrewApi.post(
      `/userRoute/create/UserFavoriteRelationship?userId=${userId}&projectId=${projectId}`
    )
    void queryClient.invalidateQueries(['favoriteProjects', userId])
  }

  const removeFavoriteProject = async (projectId: string): Promise<void> => {
    if (userId === undefined) return
    await CrewApi.delete(
      `/userRoute/deleteUserFavorite?userId=${userId}&projectId=${projectId}`
    )
    void queryClient.invalidateQueries(['favoriteProjects', userId])
  }

  return {
    favoriteProjects: data,
    isLoading,
    error,
    addFavoriteProject,
    removeFavoriteProject,
  }
}
