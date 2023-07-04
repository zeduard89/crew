import { CrewApi } from '@/api'
import { type IProject } from '@/interfaces'

interface IAllProjectError {
  errorMessage: string
}

interface IDashboardProps {
  path: string
}

type IAllProjectFetcher = (props: IDashboardProps) => Promise<IProject[] | undefined>

export const allProjectsFetcher: IAllProjectFetcher = async ({ path }) => {
  const { data } = await CrewApi.get<IProject[] | IAllProjectError>(path)

  if ('errorMessage' in data) {
    return undefined
  }

  const mainInfo = data
  return mainInfo
}
