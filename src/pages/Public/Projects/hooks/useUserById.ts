import { type ICreator } from '@/interfaces'
import { getUserById } from '@/utils'
import { useQuery } from '@tanstack/react-query'

interface IUseUserById {
  user: ICreator | undefined
  isLoading: boolean
  error: unknown
}

export const useUserById = (id: string): IUseUserById => {
  const { data, isLoading, error } = useQuery<ICreator | undefined>({
    queryKey: ['user', id],
    queryFn: async () => await getUserById(id),
  })

  return { user: data, isLoading, error }
}
