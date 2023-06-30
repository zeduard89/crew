import { type IProject } from '@/interfaces'

export const isFavoriteFn = (
  favoriteProjects: IProject[] | undefined,
  projectId: string
): boolean => {
  if (favoriteProjects == null) return false
  return favoriteProjects.some((project) => project.id === projectId)
}
