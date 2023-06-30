import { CrewApi } from '@/api'
import { type IUser } from '@/interfaces'
import { sleep } from '.'

export const getUserById = async (id: string): Promise<IUser | undefined> => {
  await sleep(1000)
  const { data } = await CrewApi.get<IUser>(`/userRoute/userDetails?id=${id}`)

  if ('errorMessage' in data) return

  return data
}
