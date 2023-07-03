import { useModalAuthStore, useUserIdStore } from '@/store'
import { copyURLtoClipBoard, numberToUSD } from '@/utils'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  FavoriteButton,
  FundModal,
  ProjectAvatar,
  ProjectSlider,
} from './components'
import { icons } from '@/assets'
import { useProjectById } from './hooks'
import axios from 'axios'
import { useQueryClient, type UseMutationResult } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'
import { useUser } from '@/hooks/useUser'
// const URL:string = import.meta.env.VITE_CREWDB_URL ?? 'http://localhost:3001'
const URL = 'http://localhost:3001'
// https://backcrew-production.up.railway.app
interface UserParams {
  id: string
}

const useAddCommentMutation = (
  id: string
): UseMutationResult<
  void,
  unknown,
  { projectId: string; userId: string; description: string },
  unknown
> => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (commentData: {
      projectId: string
      userId: string
      description: string
    }) => {
      await axios.post(
        `${URL}/commentRoute/addCommentUserToProject`,
        commentData
      )
    },
    onSuccess: () => {
      // Invalidate the project query to fetch updated data
      void queryClient.invalidateQueries(['project', id])
    },
    onError: (error) => {
      console.log('Error submitting comment:', error)
    },
  })
}

const useAddLikeMutation = (
  id: string
): UseMutationResult<
  void,
  unknown,
  { commentId: number; like: number; disLike: number },
  unknown
> => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (commentData: {
      commentId: number
      like: number
      disLike: number
    }) => {
      await axios.put(`${URL}/commentRoute/addCommentlikes`, commentData)
    },
    onSuccess: () => {
      // Invalidate the project query to fetch updated data
      void queryClient.invalidateQueries(['project', id])
    },
    onError: (error) => {
      console.log('Error submitting comment:', error)
    },
  })
}

const useAddDislikeMutation = (
  id: string
): UseMutationResult<
  void,
  unknown,
  { commentId: number; like: number; disLike: number },
  unknown
> => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (commentData: {
      commentId: number
      like: number
      disLike: number
    }) => {
      await axios.put(`${URL}/commentRoute/addCommentlikes`, commentData)
    },
    onSuccess: () => {
      // Invalidate the project query to fetch updated data
      void queryClient.invalidateQueries(['project', id])
    },
    onError: (error) => {
      console.log('Error submitting comment:', error)
    },
  })
}

export const Projects: React.FC = () => {
  const { id } = useParams<keyof UserParams>() as UserParams
  const addCommentMutation = useAddCommentMutation(id)
  const addLikesMutation = useAddLikeMutation(id)
  const addDisLikesMutation = useAddDislikeMutation(id)
  const { project } = useProjectById(id)
  const [copyShareBtn, setCopyShareBtn] = useState('Share')
  const [modalFund, setModalFund] = useState(false)
  const { userId } = useUserIdStore()
  const { user } = useUser(userId)
  const { setModalAuth } = useModalAuthStore()
  const [description, setCommentText] = useState('')
  const [errors, setErrors] = useState([])
  if (project === undefined) {
    return <div>Loading...</div>
  }
  const handleLike = async (
    commentId: number,
    like: number,
    disLike: number
  ): Promise<void> => {
    try {
      // Comprobar si project.projectComments no es nulo y está definido
      if (project.projectComments !== undefined) {
        // Comprobar si el usuario ya ha dado like al comentario
        const likedComment = project.projectComments.find(
          (comment) => comment.id === commentId && comment.likes > 0
        )

        if (likedComment !== undefined) {
          // Si el usuario ya ha dado like, no hacer nada
          return
        }
      }

      // Si el usuario no ha dado like, agregar el like
      await addLikesMutation.mutateAsync({ commentId, like, disLike })

      return
    } catch (error) {
      console.log('Error updating likes:', error)
    }
  }

  const handleDislike = async (
    commentId: number,
    like: number,
    disLike: number
  ): Promise<void> => {
    try {
      // Comprobar si el usuario ya ha dado dislike al comentario

      if (project.projectComments !== undefined) {
        const dislikedComment = project.projectComments.find(
          (comment) => comment.id === commentId && comment.disLikes > 0
        )

        if (dislikedComment !== undefined) {
          // Si el usuario ya ha dado dislike, quitar el dislike
          await addDisLikesMutation.mutateAsync({
            commentId,
            like: 0,
            disLike: 0,
          })
          return
        }
      }

      // Si el usuario no ha dado dislike, agregar el dislike
      await addDisLikesMutation.mutateAsync({ commentId, like, disLike })
    } catch (error) {
      console.log('Error updating dislikes:', error)
    }
  }

  const handleSubmitComment = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    const errors: string[] = []
    if (user?.name === '' && user?.lastName === '') {
      errors.push('The name and last name must contain at least one letter.')
    }
    if (description.trim() === '') {
      errors.push('Description field is required.')
    } else if (description.length < 3) {
      errors.push('Description must be at least 4 characters long.')
    }
    if (errors.length > 0) {
      setErrors(errors as never)
    }

    try {
      await addCommentMutation.mutateAsync({
        projectId: project?.id,
        userId,
        description,
      })
      // Reset the comment text field
      setCommentText('')
      setErrors([])
    } catch (error) {
      console.log('Error submitting comment:', error)
    }
  }

  return (
    <>
      <div className='m-12 flex h-[800px]'>
        <ProjectSlider project={project} />

        <div className='flex w-2/5 items-center justify-center bg-opacity-60'>
          <div
            className='flex flex-col gap-4 p-4'
            style={{ maxWidth: '500px', width: '100%' }}
          >
            <p className='font-bold uppercase text-secondaryDark'>Funding</p>
            <h2 className='text-4xl font-bold'>
              {project.title}:{' '}
              <span>{project.shortDescription.slice(0, 20)}</span>
            </h2>
            <p className='text-xl'>{project.description.slice(0, 500)}</p>
            <div className='my-2 flex items-center'>
              <Link
                to={`/userProfile/${project.creatorId}`}
                className='flex items-center'
              >
                <ProjectAvatar creatorId={project.creatorId} />
              </Link>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center justify-center'>
                  <span className='text-lg font-semibold uppercase'>
                    {numberToUSD(project.fundingCurrent)}
                  </span>
                  <p className='ml-2 text-xs font-semibold uppercase text-gray-500'>
                    USD
                  </p>
                </div>
                <p className='text-sm font-semibold uppercase text-gray-500'>
                  {project.fundingPercentage}%
                </p>
              </div>

              <div className='relative pt-1'>
                <div className='mb-4 flex h-2 overflow-hidden rounded bg-gray-200 text-xs'>
                  <div
                    style={{ width: `${project.fundingPercentage}%` }}
                    className='flex flex-col justify-center whitespace-nowrap bg-pink-300 text-center text-white shadow-none'
                  />
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <p className='text-sm font-semibold uppercase text-gray-500'>
                  {project.fundingPercentage}% of{' '}
                  {numberToUSD(project.fundingGoal)} goal
                </p>
                <p className='text-sm font-semibold uppercase text-gray-500'>
                  {project.fundingDayLeft} days left to go{' '}
                  {project.fundingDayLeft === 0 && '🎉'}
                </p>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex gap-2'>
                <button
                  className='flex items-center justify-center rounded-md bg-secondaryDark px-4 py-2 text-white duration-150 ease-in-out hover:bg-primary active:scale-95'
                  onClick={() => {
                    if (userId === '') {
                      setModalAuth('login')
                      return
                    }
                    setModalFund(true)
                  }}
                >
                  Fund this project
                </button>
                <FavoriteButton projectId={project.id} />
              </div>
              <button
                className='relative flex items-center justify-center rounded-md bg-secondaryDark px-4 py-2 text-white duration-150 ease-in-out hover:bg-primary active:scale-95'
                onClick={() => {
                  copyURLtoClipBoard(window.location.href)
                  setTimeout(() => {
                    setCopyShareBtn('Share')
                  }, 2000)
                  setCopyShareBtn('Copied!')
                }}
              >
                <span className='material-symbols-outlined mr-1 text-sm'>
                  share
                </span>{' '}
                {copyShareBtn}
              </button>
            </div>
          </div>
        </div>
      </div>
      {modalFund && (
        <FundModal
          project={project}
          modalFund={modalFund}
          setModalFund={setModalFund}
        />
      )}
      <div className='align-center ml-auto mr-auto mt-10 flex w-[60%] flex-col justify-center p-4 lg:w-[70%] md:w-[60%] sm:w-[100%]'>
        <h2 className='mb-4 text-2xl font-bold '>Comments</h2>
        {user?.id === undefined && (
          <div className='mb-4'>
            <p className='text-sm font-semibold text-gray-500'>
              You need to be logged in to comment
            </p>
          </div>
        )}
        {user?.id !== undefined && (
          <form
            onSubmit={handleSubmitComment}
            className='comment-form border-grey-300 bg-blue-00 mb-12 rounded-lg border p-4'
          >
            {user?.name !== '' && (
              <div className='mb-2 flex items-center'>
                <img
                  src={user?.avatar ?? icons.avatarDefault}
                  className='comment-user-logo mb-1 h-8 w-8 flex-shrink-0 rounded-full'
                />
                <div className='ml-2 mt-0 text-base '>
                  <span className='mr-1 text-base'>Post a comment as{''}</span>
                  <span className='uppercase'>
                    <span className='text-lg font-bold italic'>
                      {user?.name} {''}
                      {user?.lastName}
                    </span>
                  </span>
                </div>
              </div>
            )}

            <textarea
              id='content'
              rows={3}
              className='mb-2 h-auto max-h-40 w-full resize-none break-words rounded border border-gray-300 px-4 py-2'
              placeholder='Write your comment...'
              value={description}
              onChange={(e) => {
                setCommentText(e.target.value)
              }}
            />

            <button
              type='submit'
              className='rounded bg-secondaryDark px-4 py-2 text-white hover:bg-primary'
            >
              POST
            </button>
            {errors.length > 0 && (
              <span className='ml-2 text-red-500'>{errors[0]}</span>
            )}
          </form>
        )}

        <div className='comment-list whitespace-normal'>
          {project.projectComments
            ?.sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map((comment) => (
              <div
                key={comment.id}
                className='comment mb-4 flex rounded bg-white p-4 shadow'
              >
                <img
                  src={comment.commentUser.avatar}
                  alt='logo user'
                  className='mr-2 h-8 w-8 flex-shrink-0 rounded-full'
                ></img>

                <div className='mt-2 flex flex-grow flex-col'>
                  <div className='comment-author mt-0 text-lg font-bold'>
                    <span className=''>
                      {(comment?.name ?? '').replace(/^[a-z]/, (match) =>
                        match.toUpperCase()
                      )}
                      {''}
                      <span>
                        {' '}
                        {(comment?.lastName ?? '').replace(/^[a-z]/, (match) =>
                          match.toUpperCase()
                        )}
                      </span>
                    </span>
                  </div>
                  <div className='break-all'>
                    <p>{comment.description}</p>
                  </div>

                  <div className='mt-2 flex justify-between'>
                    <span className='text-sm text-gray-500'>
                      {comment.date}
                    </span>
                    <div className='flex items-center '>
                      <button
                        onClick={async () => {
                          await handleLike(comment.id, 1, 0)
                        }}
                      >
                        <img
                          src={icons.buttonLike}
                          alt='like'
                          className='m-1 w-4'
                        />
                      </button>
                      <span className='mr-1 text-secondaryDark'>
                        {' '}
                        {comment.likes}
                      </span>
                      <button
                        onClick={async () => {
                          await handleDislike(comment.id, 0, 1)
                        }}
                      >
                        <img
                          src={icons.buttonDislike}
                          alt='dislike'
                          className='m-1 ml-2 w-4'
                        />
                      </button>
                      <span className='text-red-500'> {comment.disLikes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
