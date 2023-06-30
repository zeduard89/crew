import { CrewApi } from '@/api'
import { supabase } from '.'

export const isRegistered = async (userId: string): Promise<void> => {
  try {
    await CrewApi.get(`/userRoute/userDetails?id=${userId}`)
  } catch (error) {
    void (await CrewApi.post('/userRoute/register/', {
      id: userId,
      name: '',
      lastName: '',
      email: (await supabase.auth.getUser()).data.user?.email,
    }))
  }
}
