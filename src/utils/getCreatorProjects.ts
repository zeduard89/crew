import { CrewApi } from '@/api'
import { type IProject } from '@/interfaces'
import { sleep } from '.'

interface CreatorProjectsProps {
  userId: string
}
export type IGetCreatorProjects = ({
  userId,
}: CreatorProjectsProps) => Promise<IProject[]>

export const getCreatorProjects: IGetCreatorProjects = async ({ userId }) => {
  if (userId.length === 0) return []

  await sleep(1000)
  const { data } = await CrewApi.get<IProject[]>(
    `/userRoute/getAllUsersProjects?creatorId=${userId}`
  )

  return data
}
