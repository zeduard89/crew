import { useUserIdStore } from '@/store'
import { isRegistered, supabase } from '@/utils'
import { useEffect } from 'react'

export const useAuthHandler = (): void => {
  const { setUserId } = useUserIdStore()

  useEffect(() => {
    void supabase.auth.getSession().then(({ data }) => {
      if (data.session != null) {
        setUserId(data.session.user.id)
      }
    })
    window.location.reload() // Recargar la página
  }, [setUserId])

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        if (session?.user.app_metadata.provider?.includes('google') ?? false) {
          if (session?.user.id !== undefined)
            void isRegistered(session?.user.id)
        }
        if (session != null) setUserId(session.user.id)
      }
      if (event === 'SIGNED_OUT') {
        setUserId('')
      }
    })
  }, [setUserId])
}
