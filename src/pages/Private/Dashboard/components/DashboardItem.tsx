import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined'
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded'

import { DashboardMenuOptions } from '../Dashboard'

export interface DashboardItemProps {
  menuOption: DashboardMenuOptions
  currentOption: DashboardMenuOptions
  onClick: (option: DashboardMenuOptions) => void
}

export const DashboardItem: React.FC<DashboardItemProps> = ({
  menuOption,
  currentOption,
  onClick,
}) => {
  const isSelected = menuOption === currentOption

  return (
    <div className='flex-none'>
      <button
        className={`my-1 w-52 rounded-md py-2 pl-4 text-start ${
          isSelected ? 'rounded-md bg-secondary text-backgroundDark3' : ''
        }`}
        onClick={() => {
          onClick(menuOption)
        }}
      >
        <div className='flex items-center align-text-top'>
          {menuOption === DashboardMenuOptions.Resume && (
            <TrendingUpOutlinedIcon className='mr-2' />
          )}
          {menuOption === DashboardMenuOptions.Contributions && (
            <MonetizationOnRoundedIcon className='mr-2 text-[#70e000]' />
          )}
          {menuOption === DashboardMenuOptions.Users && (
            <PersonOutlineOutlinedIcon className='mr-2' />
          )}
          {menuOption === DashboardMenuOptions.Projects && (
            <RocketLaunchOutlinedIcon className='mr-2' />
          )}
          <span className={'pt-0.5'}>{menuOption}</span>
        </div>
      </button>
    </div>
  )
}
