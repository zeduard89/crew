import { Outlet } from 'react-router-dom'
import { Footer, NavBar } from '.'

export const Layout: React.FC = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}
