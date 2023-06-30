import { CrewApi } from '@/api'
import { type FavoriteProjectsProps } from '@/hooks'
import { type IProject } from '@/interfaces'
import { sleep } from '.'

export type IGetFavoriteProjects = ({
  userId,
}: FavoriteProjectsProps) => Promise<IProject[]>

export const getFavoriteProjects: IGetFavoriteProjects = async ({ userId }) => {
  if (userId.length === 0) return []

  await sleep(1000)
  const { data } = await CrewApi.get<IProject[]>(
    `/userRoute/getAllUsersFavorites?userId=${userId}`
  )

  return data
}
