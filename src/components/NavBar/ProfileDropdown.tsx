import { LoadingIcon } from '@/assets/LoadingIcon'
import { useUser } from '@/hooks/useUser'
import { useUserIdStore } from '@/store'
import { supabase } from '@/utils'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const ProfileDropdown: React.FC = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const { userId } = useUserIdStore()
  const { user } = useUser(userId)

  const toggleModal = (): void => {
    setIsOpen(!isOpen)
  }

  if (user === undefined) {
    return <LoadingIcon />
  }

  return (
    <>
      <div className='relative mr-2 h-10 w-10'>
        <div className='absolute inset-0 overflow-hidden rounded-full'>
          <img
            className='h-full w-full object-cover'
            src={
              user?.avatar ??
              'https://s1.abcstatics.com/media/play/2020/09/29/avatar-kE4H--620x349@abc.jpeg'
            }
            alt='Profile'
          />
        </div>
      </div>
      <div className='relative '>
        <button
          className='active:scale-120 flex select-none items-center rounded-md p-2 capitalize duration-300 ease-in-out hover:text-secondary'
          onClick={toggleModal}
        >
          {user?.name === '' ? 'User' : user?.name} {user?.lastName}
          <span
            className={`material-symbols-outlined ml-1 text-sm duration-300 ${
              isOpen ? 'rotate-180 transform' : ''
            }`}
          >
            expand_more
          </span>
        </button>

        {isOpen && (
          <>
            <div className='absolute right-0 top-0 z-10 mt-12 flex h-auto w-[150px] flex-col items-end justify-end rounded-b-xl bg-primary pr-12 pt-6'>
              <ul className=' last:mb-4'>
                <li className='mb-2'>
                  <button
                    className='text-white duration-300 ease-in-out hover:scale-95 hover:text-secondary'
                    onClick={() => {
                      navigate(`/userProfile/${userId}`)
                    }}
                  >
                    Profile
                  </button>
                </li>
                <li className='mb-2'>
                  <button
                    className='text-white duration-300 ease-in-out hover:scale-95 hover:text-secondary'
                    onClick={() => {
                      navigate(
                        '/search?category=Tech+%26+Innovation&sort=Trending&q=&s=20&p=0'
                      )
                    }}
                  >
                    Settings
                  </button>
                </li>
                <li className='mb-2'>
                  <button
                    className='text-white duration-300 ease-in-out hover:scale-95 hover:text-secondary'
                    onClick={() => {
                      void supabase.auth.signOut()
                      navigate('/')
                    }}
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
            <div
              className='fixed left-0 top-0 z-0 h-screen w-screen'
              onClick={toggleModal}
            />
          </>
        )}
      </div>
    </>
  )
}
