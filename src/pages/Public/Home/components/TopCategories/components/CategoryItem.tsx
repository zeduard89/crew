import { icons } from '@/assets'
import { Link } from 'react-router-dom'

interface CategoryItemProps {
  category: keyof typeof Categories
  text: string
}

enum Categories {
  Tech = 'Tech & Innovation',
  Creative = 'Creative Works',
  Community = 'Community Projects',
  More = 'More',
}

const SearchLinks = {
  Tech: `/search?category='Tech+%26+Innovation'}`,
  Creative: `/search?category='Creative+Works'`,
  Community: `/search?category='Community+Projects`,
  More: `/search`,
}

export const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  text,
}) => {
  return (
    <li className='mx-4'>
      <Link
        to={SearchLinks[category]}
        className='flex flex-col items-center justify-center'
      >
        <img src={icons[category]} className=' ml-auto mr-auto h-12 w-12' />
        <span className='text-sm'>{text}</span>
      </Link>
    </li>
  )
}
