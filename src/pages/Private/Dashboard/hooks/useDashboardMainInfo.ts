import { dashboardMainInfoFetcher } from '@/utils'
import { useQuery } from '@tanstack/react-query'
import { type IDashboardMainInfo } from '@/interfaces'


interface IUseDashboardMainInfo {
  mainInfo: IDashboardMainInfo | undefined
  isLoading: boolean
  error: unknown
}

export const useDashboardMainInfo = (): IUseDashboardMainInfo => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['dashboardMainInfo'],
    queryFn: async () =>
      await dashboardMainInfoFetcher({ path: '/adminRoute/dashboardMain' }),
  })

  return { mainInfo: data, isLoading, error }
}
