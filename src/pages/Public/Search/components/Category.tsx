import { type ShowState } from '../interface'
import { handleCategoryFilter } from '../utils/filtersHandler'

interface CategoryProps {
  setShowState: React.Dispatch<React.SetStateAction<ShowState>>
  name: string
}

export const Category: React.FC<CategoryProps> = ({ setShowState, name }) => {
  return (
    <li className='my-2 ml-4'>
      <button
        className='text-black duration-300 ease-in-out hover:scale-105 hover:text-secondary active:scale-95'
        onClick={(event) => {
          handleCategoryFilter({ event, setShowState })
        }}
        name={name}
      >
        {name}
      </button>
    </li>
  )
}
