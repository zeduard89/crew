import { useFavoriteProjects } from '@/hooks'
import { useUserIdStore } from '@/store'
import { useEffect, useState } from 'react'
import { isFavoriteFn } from '.'

interface UseFavoriteHandlerProps {
  projectId: string
}

interface IUseFavoriteHandler {
  isFavorite: boolean
  addFavoriteProject: (projectId: string) => Promise<void>
  removeFavoriteProject: (projectId: string) => Promise<void>
}

export const useFavoriteHandler = ({
  projectId,
}: UseFavoriteHandlerProps): IUseFavoriteHandler => {
  const { userId } = useUserIdStore()
  const { favoriteProjects, addFavoriteProject, removeFavoriteProject } =
    useFavoriteProjects(userId)
  const favorite = isFavoriteFn(favoriteProjects, projectId)
  const [isFavorite, setIsFavorite] = useState(favorite)

  useEffect(() => {
    setIsFavorite(favorite)
  }, [favorite])

  return {
    isFavorite,
    addFavoriteProject,
    removeFavoriteProject,
  }
}
