import { type IComment } from '.'

type Category = 'Tech & Innovation' | 'Creative Works' | 'Community Projects'

export interface IProject {
  id: string
  mainImage: string
  projectImages?: IProjectImage[] //! Propiedad para almacenar las imágenes del proyecto
  projectComments?: IProjectComment[]
  images: string[]
  title: string
  shortDescription: string
  description: string
  fundingCurrent: number
  fundingGoal: number
  fundingGoalReached: boolean
  fundingPercentage: number
  fundingDayLeft: number
  updates?: IUpdate[]
  category: Category
  creatorId: string
}

export interface IProjectImage {
  url: string
  //! otras propiedades de la imagen...
}
export interface IProjectComment {
  id: number
  name: string
  description: string
  likes: string
  dislikes: string
  date: string
  displayComment: true
  userId: string
  projectId: string
  parentId: string

  //! otras propiedades de la imagen...
}

export interface IUpdate {
  id: string
  title: string
  description: string
  date: string
  comments: IComment[]
}

export interface ICreator {
  id: string
  name: string
  lastName: string
  avatar: string
}
