import { type IUser } from '@/interfaces'
import { getUserById } from '@/utils'
import { useQuery } from '@tanstack/react-query'

interface IUseUser {
  user: IUser | undefined
  isLoading: boolean
}

export const useUser = (userId: string): IUseUser => {
  const { data, isLoading } = useQuery({
    queryKey: ['user', userId],
    queryFn: async () => await getUserById(userId),
    enabled: userId !== '',
  })

  return {
    user: data,
    isLoading,
  }
}
