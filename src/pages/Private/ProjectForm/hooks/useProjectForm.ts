import { CrewApi } from '@/api'
import { PublicRoutes } from '@/router/RouterProvider'
import {
  ProjectValidation,
  type ProjectFormType,
} from '@/schemas/ProjectValidation'
import { useUserIdStore } from '@/store'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { type IProjectForm } from '../interface/projectForm'
import axios from 'axios'

export const useProjectForm = (): IProjectForm => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ProjectFormType>({
    mode: 'onBlur',
    resolver: zodResolver(ProjectValidation),
  })

  const { userId } = useUserIdStore()
  const navigate = useNavigate()

  const onSubmit = async (data: ProjectFormType): Promise<void> => {
    try {
      const { data: projectId } = await CrewApi.post<{ message: string }>(
        '/projectRoute/superProject',
        {
          ...data,
          fundingGoal: data.fundingGoal.toString(),
          fundingDayLeft: data.fundingDayLeft.toString(),
          creatorId: userId,
        }
      )
      if (data.updateProjectPicture.length !== 0) {
        // OBJETO --> ARRAY
        const selectedFiles = Array.from(data.updateProjectPicture)

        // CLASE FORM DATA, le da las propiedades a la constante files
        const files = new FormData()
        // Itero el array
        selectedFiles.forEach((file) => {
          files.append('files', file)
        })
        // Veo por consola el contenido
        // console.log(files.getAll('files'))
        // await CrewApi.post('/projectRoute/superImage', files)
        await axios.post(
          `https://crewdb.onrender.com/projectRoute/superImage`,
          files
        )
      }
      if (projectId.message === undefined) return
      navigate(`${PublicRoutes.projects}/${projectId.message}`)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    isSubmitSuccessful,
  }
}
