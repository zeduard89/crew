import { CrewApi } from '@/api'
import { images } from '@/data'
import { type IProject } from '@/interfaces'

export const getProjectById = async (
  id: string
): Promise<IProject | undefined> => {
  const { data } = await CrewApi.get<IProject>(
    `/projectRoute/search/byId?id=${id}`
  )

  if ('errorMessage' in data) return

  const project = {
    ...data,
    mainImage: images[0],
    images,
  }

  return project
}
