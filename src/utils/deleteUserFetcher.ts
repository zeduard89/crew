import { CrewApi } from '@/api'
import { type IUser } from '@/interfaces'


interface IUsersDeleteError {
    'User not found': string
}    
interface ILogicUserDelete {
    message: string
}
type IDeleteUserFetcher = (props: IUser) => Promise<ILogicUserDelete | undefined>

export const deleteUserFetcher: IDeleteUserFetcher = async ({ email, id }) => {
  const { data } = await CrewApi.put<ILogicUserDelete | IUsersDeleteError>(`/userRoute/logicalDelete?userEmail=${email}&userId=${id}`)
  
  if ('User not found' in data) {
    return {
        message: "User not found"
      }
  }
  const message = data
  return message
}