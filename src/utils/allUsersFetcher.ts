import { CrewApi } from '@/api'
import { type IUser } from '@/interfaces'

interface IAllUsersError {
  errorMessage: string
}

interface IDashboardProps {
  path: string
}

type IAllUsersFetcher = (props: IDashboardProps) => Promise<IUser[] | undefined>

export const allUsersFetcher: IAllUsersFetcher = async ({ path }) => {
  const { data } = await CrewApi.get<IUser[] | IAllUsersError>(path)

  if ('errorMessage' in data) {
    return undefined
  }

  const mainInfo = data

  return mainInfo
}
