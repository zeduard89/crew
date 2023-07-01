import { CrewApi } from '@/api'
import { type IRegisterForm } from '@/interfaces/registerForm'
import {
  RegisterValidation,
  type RegisterValidationType,
} from '@/schemas/RegisterValidation'
import { useModalAuthStore } from '@/store'
import { supabase } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type SubmitHandler } from 'react-hook-form'

export const useRegisterForm = (): IRegisterForm => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<RegisterValidationType>({
    resolver: zodResolver(RegisterValidation),
    mode: 'onBlur',
  })

  const { setModalAuth } = useModalAuthStore()

  const onSubmit: SubmitHandler<RegisterValidationType> = async (data) => {
    try {
      const { error: registerError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      })

      if (registerError != null) {
        setError('email', {
          type: 'manual',
          message: registerError.message,
        })
        throw registerError
      }

      const { error: loginError } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      })

      if (loginError != null) throw loginError

      setModalAuth('closed')
      await CrewApi.post('/userRoute/register', {
        id: (await supabase.auth.getUser()).data.user?.id,
        email: data.email,
        name: data.firstName,
        lastName: data.lastName,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return { register, handleSubmit, onSubmit, errors, isSubmitting }
}
