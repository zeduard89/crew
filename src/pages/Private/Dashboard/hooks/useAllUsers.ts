import { allUsersFetcher } from '@/utils'
import { useQuery } from '@tanstack/react-query'
import { type IUser } from '@/interfaces'


interface IUseAllUsers {
  allUsers: IUser[] | undefined
  isLoading: boolean
  error: unknown
}

export const useAllUsers = (): IUseAllUsers => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['allUsers'],
    queryFn: async () =>
      await allUsersFetcher({ path: '/userRoute/getAllUsers' }),
  })

  return { allUsers: data, isLoading, error }
}
