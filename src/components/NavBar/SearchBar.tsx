import { PublicRoutes } from '@/router/RouterProvider'
import { useState, type ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export const SearchBar: React.FC = () => {
  const navigate = useNavigate()
  const [ProjectName, setProjectName] = useState('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setProjectName(event.target.value)
  }

  return (
    <div className='relative flex w-96'>
      <input
        type='text'
        value={ProjectName}
        onChange={handleInputChange}
        className='h-8 w-full rounded-md border-2 border-neutral-100 bg-neutral-100 pl-3 text-sm text-gray-600 outline-none duration-300 focus:border-secondaryDark'
        placeholder='Search for a project'
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            navigate(`${PublicRoutes.search}?q=${ProjectName}`)
            setProjectName('')
          }
        }}
      />
      <button
        className='hover:bg-secondaryLight absolute right-0 flex h-8 items-center justify-center rounded-r-md bg-secondaryDark px-1 py-1 text-primary transition duration-300'
        onClick={() => {
          navigate(`${PublicRoutes.search}?q=${ProjectName}`)
          setProjectName('')
        }}
      >
        <span className='material-symbols-outlined cursor-pointer'>search</span>
      </button>
    </div>
  )
}
