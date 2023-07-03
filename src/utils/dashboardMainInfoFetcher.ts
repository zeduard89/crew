import { CrewApi } from '@/api'
import { type IDashboardMainInfo } from '@/interfaces'

interface IDashboardMainInfoError {
  errorMessage: string
}

interface IDashboardProps {
  path: string
}

type IDashboardMainInfoFetcher = (props: IDashboardProps) => Promise<IDashboardMainInfo | undefined>

export const dashboardMainInfoFetcher: IDashboardMainInfoFetcher = async ({ path }) => {
  const { data } = await CrewApi.get<IDashboardMainInfo | IDashboardMainInfoError>(path)

  if ('errorMessage' in data) {
    return undefined
  }

  const mainInfo = data

  return mainInfo
}



