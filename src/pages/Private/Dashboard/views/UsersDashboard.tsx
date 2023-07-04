import { useState } from 'react'
import { LineChart, UserTable } from '../components'
import { useDashboardMainInfo, useAllUsers } from '../hooks'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'

export const UsersDashboard: React.FC = () => {
  const { mainInfo } = useDashboardMainInfo()
  const enero =
    mainInfo?.chartRegisteredUsersPerMonth[0].totalRegisteredUsers ?? 0
  const febrero =
    mainInfo?.chartRegisteredUsersPerMonth[1].totalRegisteredUsers ?? 0
  const marzo =
    mainInfo?.chartRegisteredUsersPerMonth[2].totalRegisteredUsers ?? 0
  const abril =
    mainInfo?.chartRegisteredUsersPerMonth[3].totalRegisteredUsers ?? 0
  const mayo =
    mainInfo?.chartRegisteredUsersPerMonth[4].totalRegisteredUsers ?? 0
  const junio =
    mainInfo?.chartRegisteredUsersPerMonth[5].totalRegisteredUsers ?? 0
  const julio =
    mainInfo?.chartRegisteredUsersPerMonth[6].totalRegisteredUsers ?? 0

  const allData = [[enero, febrero, marzo, abril, mayo, junio, julio]]
  const title = 'Nuevos Usuarios por Mes [Un]'

  let { allUsers } = useAllUsers()
  allUsers = allUsers?.sort((a, b) => {
    if (a.lastName < b.lastName) {
      return -1
    }
    if (a.lastName > b.lastName) {
      return 1
    }

    return 0
  })
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
      {usersInTable !== null && (
        <div className='mt-5 flex h-[440px] flex-col justify-between rounded-lg bg-backgroundDark1 p-5'>
          <UserTable responseData={usersInTable ?? []} />
          <div className='mb-2 h-[35px]'>
            {allUsers !== null &&
              allUsers !== undefined &&
              allUsers?.length > usersPerPage && (
                <div className='flex justify-center'>
                  <button
                    className={`mr-10 w-[30px] text-xl ${
                      currentPage === 1 ? 'text-backgroundDark1' : 'text-white'
                    } `}
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                  >
                    <ArrowCircleLeftIcon
                      className={`${
                        currentPage === 1
                          ? 'hover:text-backgroundDark1'
                          : 'hover:text-gray-300'
                      }`}
                      style={{ fontSize: 50 }}
                    />
                  </button>
                  <button
                    className={`mr-10 w-[30px] text-xl ${
                      currentPage === totalPages
                        ? 'text-backgroundDark1'
                        : 'text-white'
                    } `}
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                  >
                    <ArrowCircleRightIcon
                      className={`${
                        currentPage === totalPages
                          ? 'hover:text-backgroundDark1'
                          : 'hover:text-gray-300'
                      }`}
                      style={{ fontSize: 50 }}
                    />
                  </button>
                </div>
              )}
          </div>
        </div>
      )}
    </div>
  )
}
