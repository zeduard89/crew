import logo from '@/assets/favicon.png'
import { CategoryItem } from './components'

export const TopCategories: React.FC = () => {
  return (
    <div className=' m-auto mt-8 flex h-[250px] w-full flex-col items-center justify-around '>
      <div className='mb-4 mt-0 box-border flex h-[125px] w-full justify-center   '>
        <div className='flex h-[125px] items-center justify-center '>
          <img src={logo} />
        </div>
        <div className='flex w-4/5 flex-col items-center justify-start p-5'>
          <h2 className='text-2xl font-bold '>
            Which categories interest you?
          </h2>
          <p className='text-center text-sm'>
            projects just for you and get great recommendations when .
          </p>
          <div className='mt-3 box-border flex w-1/2 justify-center text-sm'>
            <button className='mr-0 rounded-sm border bg-white px-3 py-1 uppercase  text-black focus:bg-white focus:outline-none'>
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className='flex h-[125px] w-[100%]  flex-row justify-center'>
        <div className='flex w-[100%] justify-center justify-items-stretch'>
          <ul className='flex justify-between p-0'>
            <CategoryItem category='Tech' text='Tech & Innovation' />
            <CategoryItem category='Creative' text='Creative Works' />
            <CategoryItem category='Community' text='Community Projects' />
            <CategoryItem category='More' text='More' />
          </ul>
        </div>
      </div>
    </div>
  )
}

// h-screen w-screen flex items-center justify-center
