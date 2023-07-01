import { Logo } from '@/assets/Logo'
import { Auth } from '@/auth'
import { useAuthHandler } from '@/auth/hooks'
import { Explorer } from '@/components/NavBar/Explorer'
import { PrivateRoutes, PublicRoutes } from '@/router/RouterProvider'
import { useModalAuthStore, useUserIdStore } from '@/store'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { SearchBar } from '.'
import { ProfileDropdown } from './ProfileDropdown'

export const NavBar: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation().pathname
  useAuthHandler()
  const {  isLoaded} = useUserIdStore()
  const { modalAuth, setModalAuth } = useModalAuthStore()

  return (
    <header>
      <nav className='flex h-16 items-center justify-between bg-primary font-semibold text-white'>
        <div className='ml-8 flex items-center justify-center gap-5'>
          <div
            className='cursor-pointer duration-300'
            onClick={() => {
              navigate('/')
            }}
          >
            <Logo />
          </div>

          {location !== PublicRoutes.search && <Explorer />}
        </div>
        {location !== PublicRoutes.search && <SearchBar />}
        <div className='mr-8 flex items-center gap-5 '>
          <div className={'border-r border-gray-400'}>
            <Link
              className='cursor-pointer select-none pr-5 duration-300 hover:text-secondary active:scale-95'
              to={PrivateRoutes.createProject}
            >
              Start a project
            </Link>
          </div>
          {isLoaded && (
            <>
              <button
                className='cursor-pointer select-none duration-300 hover:text-secondary active:scale-95'
                onClick={() => {
                  setModalAuth('login')
                }}
              >
                Log In
              </button>

              <button
                className='cursor-pointer select-none duration-300 hover:text-secondary active:scale-95'
                onClick={() => {
                  setModalAuth('register')
                }}
              >
                Sign Up
              </button>
            </>
          )}
          {!isLoaded  && (
            <div className='flex items-center'>
              
              <ProfileDropdown />
            </div>
          )}
        </div>
      </nav>
      <Auth modalAuth={modalAuth} setModalAuth={setModalAuth} />
    </header>
  )
}
