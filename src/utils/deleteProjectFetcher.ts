import { CrewApi } from '@/api'
import { type IProject } from '@/interfaces'


interface IProjectDeleteError {
    'User not found': string
}    
interface ILogicProjectDelete {
    message: string
}
type IDeleteProjectsFetcher = (props: IProject) => Promise<ILogicProjectDelete | undefined>

export const deleteProjectFetcher: IDeleteProjectsFetcher = async ({ id }) => {
  const { data } = await CrewApi.put<ILogicProjectDelete | IProjectDeleteError>(`/userRoute/logicalDelete?&userId=${id}`)
  
  if ('User not found' in data) {
    return {
        message: "User not found"
      }
  }
  const message = data
  return message
}