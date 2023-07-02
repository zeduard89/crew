import { CrewApi } from '@/api'
import { type IProject } from '@/interfaces'

interface IProjectError {
  errorMessage: string
}

interface IProjectsProps {
  path: string
  params?: URLSearchParams
}

type IProjectsFetcher = (props: IProjectsProps) => Promise<IProject[] | []>

export const projectsFetcher: IProjectsFetcher = async ({ path, params }) => {
  const { data } = await CrewApi.get<IProject[] | IProjectError>(path, {
    params,
  })

  if ('errorMessage' in data) {
    return []
  }

  const projects: IProject[] =
    data?.map((project) => {
      // Extraer solo las URLs de las imágenes y asignarlas a la propiedad mainImage
      const mainImageUrls =
        project.projectImages?.map((image) => image.url) ?? []

      return {
        ...project,
        mainImage: mainImageUrls[0],
      }
    }) ?? []

  return projects
}
