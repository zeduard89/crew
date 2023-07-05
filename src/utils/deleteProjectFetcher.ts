import { CrewApi } from '@/api'
import { type IProject } from '@/interfaces'


type IProjectDeleteError = string    
type ILogicProjectDelete = string

type IDeleteProjectsFetcher = (props: IProject) => Promise<ILogicProjectDelete | undefined>

export const deleteProjectFetcher: IDeleteProjectsFetcher = async ({ id }) => {
  const { data } = await CrewApi.delete<ILogicProjectDelete | IProjectDeleteError>(`/projectRoute/deleteProject?projectId=${id}`)
  console.log(data);
  
  if (data === 'Project Was Deleted Successfully') {
    return "Project not found"
  }
  const message = data
  return message
}