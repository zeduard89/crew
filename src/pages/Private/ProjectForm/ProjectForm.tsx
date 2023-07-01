import { LoadingIcon } from '@/assets/LoadingIcon'
import { useQueryClient } from '@tanstack/react-query'
import { ProjectInput, ProjectInputSelect, ProjectTextArea } from './components'
import { useProjectForm } from './hooks'

export const ProjectForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isSubmitSuccessful,
    isSubmitting,
  } = useProjectForm()
  const queryClient = useQueryClient()

  if (isSubmitSuccessful) {
    void queryClient.invalidateQueries(['popularProjects'])
  }

  return (
    <div className='container mx-auto my-10 px-4'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mx-auto max-w-md rounded border bg-gray-50 p-4'
      >
        <ProjectInput
          name='title'
          type='text'
          placeholder='Title'
          register={register}
          label='Title'
          errors={errors}
        />

        <ProjectInput
          name='shortDescription'
          type='text'
          placeholder='Short description'
          register={register}
          label='Short description'
          errors={errors}
        />

        <ProjectTextArea
          name='description'
          register={register}
          label='General description'
          errors={errors}
          placeholder='General description'
        />

        <ProjectInput
          name='fundingGoal'
          type='number'
          placeholder='Goal funding'
          register={register}
          label='Goal funding'
          errors={errors}
          defaultValue='0'
        />

        <ProjectInput
          name='fundingDayLeft'
          type='number'
          placeholder='Funding deadline'
          register={register}
          label='Funding deadline'
          errors={errors}
          defaultValue='0'
        />

        <ProjectInputSelect
          name='category'
          register={register}
          label='Category'
          errors={errors}
          defaultOption='Select a category'
          options={[
            'Tech & Innovation',
            'Creative Works',
            'Community Projects',
          ]}
        />

        <ProjectInputSelect
          name='location'
          register={register}
          label='Location'
          errors={errors}
          defaultOption='Select a location'
          options={['Argentina','Mexico']}
        />

        <div className='my-4 mb-6 flex flex-col'>
          <label htmlFor='Images' className='mb-2 block text-lg font-semibold'>
            Images:
          </label>
          <input
            type='file'
            id='updateProjectPicture'
            accept='image/*'
            className='w-[520px]'
            multiple
            {...register('updateProjectPicture')}
          />
          {errors.updateProjectPicture != null && (
            <span className='ml-3 text-sm font-semibold text-red-600'>
              {errors.updateProjectPicture?.message ?? 'This field is required'}
            </span>
          )}
        </div>

        <button
          type='submit'
          className='bg-primary-500 mx-auto block rounded bg-primary px-4 py-2 font-bold text-white duration-300 hover:bg-secondaryDark active:scale-95'
        >
          {isSubmitting && <LoadingIcon />}
          Create project
        </button>
      </form>
    </div>
  )
}
