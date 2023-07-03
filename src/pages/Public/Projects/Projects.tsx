import { useModalAuthStore, useUserIdStore } from '@/store'
import { copyURLtoClipBoard, numberToUSD } from '@/utils'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  FavoriteButton,
  FundModal,
  ProjectAvatar,
  ProjectSlider,
} from './components'
import { useProjectById } from './hooks'
import axios from 'axios'
import { useQueryClient, type UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query'
const URL:string = import.meta.env.VITE_CREWDB_URL ?? 'http://localhost:3001'



interface UserParams {
  id: string
}

 const useAddCommentMutation = (id: string): UseMutationResult<void, unknown, { projectId: string; userId: string; description: string }, unknown> => {
  const queryClient = useQueryClient();

   return useMutation({ mutationFn: async (commentData: { projectId: string; userId: string; description: string }) => {
      await axios.post(`${URL}commentRoute/addCommentUserToProject`, commentData);

    }, onSuccess: () => {
        // Invalidate the project query to fetch updated data
       void queryClient.invalidateQueries(['project', id]);
      }, onError: (error) => {
        console.log('Error submitting comment:', error);
      } });

};

const useAddLikeMutation = (id:string):UseMutationResult<void, unknown, { commentId:number,like:number,disLike:number }, unknown> => {
  const queryClient = useQueryClient();

  return useMutation({ mutationFn: async (commentData: { commentId:number,like:number,disLike:number})=>{
    await axios.put(`${URL}commentRoute/addCommentlikes`, commentData);
  },onSuccess: () => {
    // Invalidate the project query to fetch updated data
   void queryClient.invalidateQueries(['project', id]);
  }, onError: (error) => {
    console.log('Error submitting comment:', error);
  } });

}

const useAddDislikeMutation = (id:string):UseMutationResult<void, unknown, { commentId:number,like:number,disLike:number }, unknown> => {
  const queryClient = useQueryClient();

  return useMutation({ mutationFn: async (commentData: { commentId:number,like:number,disLike:number})=>{
    await axios.put(`${URL}commentRoute/addCommentlikes`, commentData);
  },onSuccess: () => {
    // Invalidate the project query to fetch updated data
   void queryClient.invalidateQueries(['project', id]);
  }, onError: (error) => {
    console.log('Error submitting comment:', error);
  } });

}


export const Projects: React.FC = () => {
  const { id } = useParams<keyof UserParams>() as UserParams
  const addCommentMutation = useAddCommentMutation(id);
  const addLikesMutation = useAddLikeMutation(id);
  const addDisLikesMutation = useAddDislikeMutation(id);
  const { project } = useProjectById(id)
  const [copyShareBtn, setCopyShareBtn] = useState('Share')
  const [modalFund, setModalFund] = useState(false)
  const { userId } = useUserIdStore()
  const { setModalAuth } = useModalAuthStore()
  const [description, setCommentText] = useState('');


  if (project === undefined) {
    return <div>Loading...</div>
  }

  const handleLike = async (commentId:number,like:number,disLike:number): Promise<void> => {
    try {
      await addLikesMutation.mutateAsync({commentId,like,disLike})
    } catch (error) {
      console.log('Error updating likes:', error);
    }
  };

  const handleDislike = async (commentId:number,like:number,disLike:number): Promise<void> => {
    try {
       // await axios.put(`${URL}/commentRoute/addCommentlikes`, {commentId,like,disLike});
      await addDisLikesMutation.mutateAsync({commentId,like,disLike})
    } catch (error) {
      console.log('Error updating dislikes:', error);
    }
  };


  

  const handleSubmitComment = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
  
    try {
      await addCommentMutation.mutateAsync({ projectId: project?.id, userId, description });
      // Reset the comment text field
      setCommentText('');
    } catch (error) {
      console.log('Error submitting comment:', error);
    }
  };



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
              <div className='flex items-center'>
                <ProjectAvatar creatorId={project.creatorId} />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center justify-center'>
                  <span className='text-lg font-semibold uppercase'>
                    {numberToUSD(project.fundingCurrent)}
                  </span>
                  <p className='ml-2 text-xs font-semibold uppercase text-gray-500'>
                    ARG
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
      <div className="mt-8 p-4 border border-gray-300 rounded">
      <form onSubmit={handleSubmitComment} className='mt-4'>
          <textarea
            value={description}
            onChange={(e) => { setCommentText(e.target.value); }}
            placeholder='Add a comment...'
            className='w-full px-4 py-2 border border-gray-300 rounded'
          ></textarea>
          <button
            type='submit'
            className='mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-primaryDark'
          >
            Submit Comment
          </button>
        </form>
        <h3 className="text-xl font-bold mb-4">Comments</h3>
        {project.projectComments?.map((comment) => (
          <div key={comment.id} className="mb-4">
            <p className="font-semibold">{comment.name}</p>
            <p>{comment.description}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-gray-500">
                {comment.date}
              </span>
              <button onClick={async () => { await handleLike(comment.id,1,0); }}>
                Like {comment.likes}
              </button>
              <button onClick={async () => { await handleDislike(comment.id,0,1); }}>
                Dislike {comment.disLikes}
              </button>
            </div>
          </div>
        ))}
      </div>
      
    </>
  )
}
