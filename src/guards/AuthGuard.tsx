import { PublicRoutes } from '@/router/RouterProvider'
import { useModalAuthStore, useUserIdStore } from '@/store'
import { Navigate, Outlet } from 'react-router-dom'

export const AuthGuard: React.FC = () => {
  const { userId } = useUserIdStore()
  const { setModalAuth } = useModalAuthStore()

  if (userId.length !== 0) {
    return <Outlet />
  } else {
    setModalAuth('login')
    return <Navigate replace to={PublicRoutes.home} />
  }
}
