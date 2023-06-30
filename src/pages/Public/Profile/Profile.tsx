import Location from '@/assets/location.svg'
import { useUser } from '@/hooks/useUser'
import { useUserIdStore } from '@/store'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { About, Contributions, SettingsForm, UserProjectsFav } from './views'
import { MenuItem } from './components'

enum UserMenuOptions {
  Profile = 'Profile',
  Projects = 'Projects',
  Contributions = 'Contributions',
  Settings = 'Settings',
}

interface UserParams {
  id: string
}

export const Profile: React.FC = () => {
  const { userId } = useUserIdStore()
  const { id } = useParams<keyof UserParams>() as UserParams
  const { user } = useUser(id)

  const [userMenu, setUserMenu] = useState<UserMenuOptions>(
    UserMenuOptions.Profile
  )

  const handleOnClick = (option: UserMenuOptions): void => {
    setUserMenu(option)
  }

  return (
    <div className='flex justify-center'>
      <div className='flex w-3/4 flex-col'>
        <div className='mt-10 flex '>
          <div className='mt-6'>
            <div>
              <h1 className='text-3xl font-bold text-primary'>{`${
                user?.name ?? 'Name'
              } ${user?.lastName ?? 'LastName'}`}</h1>
            </div>
            <div className='mb-10 flex items-center'>
              <img className='w-10' src={Location} alt='Location Pin' />
              <h2 className='text-2xl text-primary'>
                {`${user?.country ?? 'Country'}, ${user?.city ?? ''}`}
              </h2>
            </div>
          </div>
          <div>
            <img src={user?.avatar} alt='Avatar image' className='ml-10 w-32' />
          </div>
        </div>
        <div className='mt-5 flex items-start justify-start'>
          <MenuItem
            menuOption={UserMenuOptions.Profile}
            currentOption={userMenu}
            onClick={handleOnClick}
          />
          <MenuItem
            menuOption={UserMenuOptions.Projects}
            currentOption={userMenu}
            onClick={handleOnClick}
          />
          <MenuItem
            menuOption={UserMenuOptions.Contributions}
            currentOption={userMenu}
            onClick={handleOnClick}
          />
          <MenuItem
            menuOption={UserMenuOptions.Settings}
            currentOption={userMenu}
            onClick={handleOnClick}
          />
        </div>
        <hr className='my-3 border border-primary' />
        {userMenu === UserMenuOptions.Profile && <About user={user} />}
        {userMenu === UserMenuOptions.Projects && <UserProjectsFav />}
        {userMenu === UserMenuOptions.Contributions && <Contributions />}
        {id === userId &&
          userMenu === UserMenuOptions.Settings &&
          user !== undefined && <SettingsForm user={user} />}
      </div>
    </div>
  )
}
