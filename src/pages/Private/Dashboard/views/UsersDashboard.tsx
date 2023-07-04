import { useState } from 'react'
import { LineChart, UserTable } from '../components'
import { useDashboardMainInfo, useAllUsers } from '../hooks'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'

export const UsersDashboard: React.FC = () => {
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
  const [currentPage, setCurrentPage] = useState(1)
  const usersPerPage = 5

  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const usersInTable = allUsers?.slice(indexOfFirstUser, indexOfLastUser)

  const totalPages = Math.ceil((allUsers?.length ?? 0) / usersPerPage)

  const goToPreviousPage = (): void => {
    setCurrentPage((prevPage) => prevPage - 1)
  }

  const goToNextPage = (): void => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

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
      {allUsers !== null &&
        allUsers !== undefined &&
        allUsers?.length > usersPerPage && (
          <div className=' mr-4 flex justify-end'>
            <button
              className='mr-6 w-[30px] text-xl text-white'
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
            >
              <ArrowCircleLeftIcon style={{ fontSize: 50, color: '#FFFFFF' }} />
            </button>
            <button
              className='text-white'
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            >
              <ArrowCircleRightIcon
                style={{ fontSize: 50, color: '#FFFFFF' }}
              />
            </button>
          </div>
        )}
      {usersInTable !== null && (
        <div className='mt-5 rounded-lg bg-backgroundDark1 p-5'>
          <UserTable responseData={usersInTable} />
        </div>
      )}
    </div>
  )
}
