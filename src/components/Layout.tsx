import { Outlet, useLocation } from 'react-router-dom'
import { Footer, NavBar } from '.'

export const Layout: React.FC = () => {
  const location = useLocation()

  return (
    <>
      <NavBar />
      <Outlet />
      {location.pathname !== '/dashboard' && <Footer />}
    </>
  )
}
