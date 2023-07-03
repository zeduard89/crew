import { LineChart, UserTable } from '../components'
import { useDashboardMainInfo, useAllUsers } from '../hooks'

export const UsersDashboard: React.FC = () => {
  // Variables definition for LineChart use
  const { mainInfo } = useDashboardMainInfo()
  const january =
    mainInfo?.chartRegisteredUsersPerMonth[0].totalRegisteredUsers ?? 0
  const february =
    mainInfo?.chartRegisteredUsersPerMonth[1].totalRegisteredUsers ?? 0
  const march =
    mainInfo?.chartRegisteredUsersPerMonth[2].totalRegisteredUsers ?? 0
  const april =
    mainInfo?.chartRegisteredUsersPerMonth[3].totalRegisteredUsers ?? 0
  const may =
    mainInfo?.chartRegisteredUsersPerMonth[4].totalRegisteredUsers ?? 0
  const june =
    mainInfo?.chartRegisteredUsersPerMonth[5].totalRegisteredUsers ?? 0
  const july =
    mainInfo?.chartRegisteredUsersPerMonth[6].totalRegisteredUsers ?? 0

  const allData = [[january, february, march, april, may, june, july]]
  const title = 'New Users per Month [Un]'

  const { allUsers } = useAllUsers()
  const usersInTable = allUsers?.slice(0, 5)

  return (
    <div className='ml-10 flex h-fit flex-col'>
      <h2 className='mb-8 ml-56 items-center justify-center pl-20 pt-10 text-3xl text-secondary'>
        User Dashboard
      </h2>
      <LineChart
        title={title}
        data={allData}
        width={'w-[800px]'}
        fontSize={20}
        showLabels={true}
      />
      {usersInTable !== null ? (
        usersInTable != null ? (
          <div className='mt-5 rounded-lg bg-backgroundDark1 p-5'>
            <UserTable responseData={usersInTable} />
          </div>
        ) : null
      ) : null}
    </div>
  )
}
