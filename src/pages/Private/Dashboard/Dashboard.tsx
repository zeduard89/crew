import { useState } from 'react'
import { DashboardItem } from './components'
import {
  ProjectsDashboard,
  UsersDashboard,
  ResumeDashboard,
  ContributionsDashboard,
} from './views'

export enum DashboardMenuOptions {
  Resume = 'Resume',
  Contributions = 'Contributions',
  Users = 'Users',
  Projects = 'Projects',
}
export const Dashboard: React.FC = () => {
  const [dashboardMenu, setDashboardMenu] = useState<DashboardMenuOptions>(
    DashboardMenuOptions.Resume
  )
  const handleOnClick = (option: DashboardMenuOptions): void => {
    setDashboardMenu(option)
  }

  return (
    <div id='Main container' className='flex h-[1000px] bg-backgroundDark2 p-5'>
      <div
        id='Sections'
        className='h-[960px] w-60 rounded-l-xl bg-backgroundDark3 p-5 font-semibold text-secondary'
      >
        <h2 className='mb-4 text-xl'>Sections</h2>
        <ul>
          <DashboardItem
            menuOption={DashboardMenuOptions.Resume}
            currentOption={dashboardMenu}
            onClick={handleOnClick}
          />
          <DashboardItem
            menuOption={DashboardMenuOptions.Contributions}
            currentOption={dashboardMenu}
            onClick={handleOnClick}
          />{' '}
          <DashboardItem
            menuOption={DashboardMenuOptions.Users}
            currentOption={dashboardMenu}
            onClick={handleOnClick}
          />
          <DashboardItem
            menuOption={DashboardMenuOptions.Projects}
            currentOption={dashboardMenu}
            onClick={handleOnClick}
          />
        </ul>
      </div>
      <div
        id='vertical line'
        className='h-[960px] border border-secondary'
      ></div>
      <div
        id='section container'
        className='h-[960px] w-full rounded-r-xl bg-backgroundDark3 p-5'
      >
        {dashboardMenu === DashboardMenuOptions.Resume && <ResumeDashboard />}
        {dashboardMenu === DashboardMenuOptions.Contributions && (
          <ContributionsDashboard />
        )}
        {dashboardMenu === DashboardMenuOptions.Users && <UsersDashboard />}
        {dashboardMenu === DashboardMenuOptions.Projects && (
          <ProjectsDashboard />
        )}
      </div>
    </div>
  )
}
