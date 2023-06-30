/* eslint-disable react-hooks/exhaustive-deps */
import { CrewApi } from '@/api'
import { LoadingIcon } from '@/assets/LoadingIcon'
import { type IUser } from '@/interfaces'
import {
  UserValidation,
  type UserSettingsFormType,
} from '@/schemas/UserValidation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { SettingsFormInput } from '../components'

interface SettingsProps {
  user: IUser
}

export const SettingsForm: React.FC<SettingsProps> = ({ user }) => {
  const navigate = useNavigate()
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<UserSettingsFormType>({
    mode: 'onBlur',
    resolver: zodResolver(UserValidation),
  })

  useEffect(() => {
    setValue('updateName', user.name ?? '')
    setValue('updateLastName', user.lastName ?? '')
    setValue('updateEmail', user.email ?? '')
    setValue('updateCountry', user.country ?? '')
    setValue('updateCity', user.city ?? '')
    setValue('updateAboutMe', user.aboutMe ?? '')
    setValue('updateShortDescription', user.shortDescription ?? '')
  }, [])

  const queryClient = useQueryClient()

  const onSubmit = async (data: UserSettingsFormType): Promise<void> => {
    try {
      await CrewApi.put('userRoute/updateUserInfo', {
        id: user.id,
        ...data,
      })

      if (data.updateProfilePicture.length === 1) {
        await CrewApi.put(
          'userRoute/updateUserInfo',
          {
            id: user.id,
            file: data.updateProfilePicture[0],
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
      }

      void queryClient.invalidateQueries(['user', user.id])
    } catch (error) {
      console.log('No se pudieron actualizar los datos', error)
    }
  }

  if (isSubmitSuccessful) {
    navigate(0)
  }

  return (
    <div className='relative h-auto w-full'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mb-4 w-[555px] rounded border border-gray-300 bg-gray-100 p-4'
      >
        <SettingsFormInput
          label='Name'
          name='updateName'
          type='text'
          placeholder='Your name'
          register={register}
          error={errors.updateName}
        />

        <SettingsFormInput
          label='Last Name'
          name='updateLastName'
          type='text'
          placeholder='Your last name'
          register={register}
          error={errors.updateLastName}
        />

        <SettingsFormInput
          label='Email'
          name='updateEmail'
          type='text'
          placeholder='Your email'
          register={register}
          error={errors.updateEmail}
        />

        <SettingsFormInput
          label='Country'
          name='updateCountry'
          type='text'
          placeholder='Your country'
          register={register}
          error={errors.updateCountry}
        />

        <SettingsFormInput
          label='City'
          name='updateCity'
          type='text'
          placeholder='Your city'
          register={register}
          error={errors.updateCity}
        />

        <SettingsFormInput
          label='About Me'
          name='updateAboutMe'
          type='text'
          placeholder='Tell something about your self'
          register={register}
          error={errors.updateAboutMe}
        />

        <div className='mb-4 flex flex-col'>
          <label
            htmlFor='shortDescription'
            className='mb-2 block text-lg font-bold text-gray-500'
          >
            Short Description:
          </label>
          <textarea
            id='shortDescription'
            placeholder='Tell something about your self'
            {...register('updateShortDescription')}
            className='h-20 w-[520px] rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none'
          />
          {errors.updateShortDescription != null && (
            <span className='ml-3 text-sm font-semibold text-red-600'>
              {errors.updateShortDescription?.message ??
                'This field is required'}
            </span>
          )}
        </div>
        <div className='my-4 mb-6 flex flex-col'>
          <label htmlFor='avatar' className='mb-2 block text-lg font-semibold'>
            Avatar:
          </label>
          <input
            type='file'
            id='updateProfilePicture'
            accept='image/*'
            className='w-[520px]'
            {...register('updateProfilePicture')}
          />
          {errors.updateProfilePicture != null && (
            <span className='ml-3 text-sm font-semibold text-red-600'>
              {errors.updateProfilePicture?.message ?? 'This field is required'}
            </span>
          )}
        </div>

        <button
          type='submit'
          className='mb-8 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'
        >
          {isSubmitting ? <LoadingIcon /> : 'Save Changes'}
        </button>
      </form>
    </div>
  )
}
