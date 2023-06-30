import { PublicRoutes } from '@/router/RouterProvider'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Explorer: React.FC = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button
        className='flex select-none items-center  rounded-md p-2 duration-300 ease-in-out hover:text-secondary active:scale-95'
        onClick={toggleModal}
      >
        Explorer
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
          <div className='absolute -top-4 left-40 z-10 mt-16 flex h-auto w-[240px] rounded-b-xl bg-primary pl-12 pt-6'>
            <ul className='last:mb-4'>
              <li className='mb-2'>
                <button
                  className='text-white duration-300 ease-in-out hover:scale-105 hover:text-secondary active:scale-95'
                  onClick={() => {
                    navigate(PublicRoutes.search)
                  }}
                >
                  All Projects
                </button>
              </li>
              <li className='mb-2'>
                <button
                  className='text-white duration-300 ease-in-out hover:scale-105 hover:text-secondary active:scale-95'
                  onClick={() => {
                    navigate(
                      `${PublicRoutes.search}?category=Tech+%26+Innovation`
                    )
                  }}
                >
                  Tech & Innovation
                </button>
              </li>
              <li className='mb-2'>
                <button
                  className='text-white duration-300 ease-in-out hover:scale-105 hover:text-secondary active:scale-95'
                  onClick={() => {
                    navigate(`${PublicRoutes.search}?category=Creative+Works`)
                  }}
                >
                  Creative Works
                </button>
              </li>
              <li className='mb-2'>
                <button
                  className='text-white duration-300 ease-in-out hover:scale-105 hover:text-secondary active:scale-95'
                  onClick={() => {
                    navigate(
                      `${PublicRoutes.search}?category=Community+Projects`
                    )
                  }}
                >
                  Community Projects
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
    </>
  )
}
