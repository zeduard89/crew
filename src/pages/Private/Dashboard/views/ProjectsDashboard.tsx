import { LineChart, ProjectTable } from '../components'
import { useDashboardMainInfo, useAllProjects } from '../hooks'
import { useState } from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'

// import { type IDashboardMainInfo } from '@/interfaces'

// type IMonthData = Record<
//   string,
//   {
//     chartActiveProjects: Record<string, number>
//   }
// >

// const getProjectsData = (mInfo: IDashboardMainInfo | undefined): number[] => {
//   const mainInfo = mInfo

//   const getDataArray = (category: string): number[] => {
//     const dataArray =
//       mainInfo?.chartActiveProjectsPerMonth.map(
//         (monthData: IMonthData) =>
//           monthData[category]?.chartActiveProjects[category] ?? 0
//       ) ?? []
//     return dataArray
//   }

//   const dataCom = getDataArray('activeProjectsCommunityCategory')
//   const dataCrea = getDataArray('activeProjectsCreativeCategory')
//   const dataTech = getDataArray('activeProjectsTechCategory')

//   return {
//     dataCom,
//     dataCrea,
//     dataTech,
//   }
// }
export const ProjectsDashboard: React.FC = () => {
  const { mainInfo } = useDashboardMainInfo()
  // const { dataCom, dataCrea, dataTech } = getProjectsData(mainInfo)

  const januaryCom =
    mainInfo?.chartActiveProjectsPerMonth[0].January.chartActiveProjects
      .activeProjectsCommunityCategory ?? 0
  const februaryCom =
    mainInfo?.chartActiveProjectsPerMonth[1].February.chartActiveProjects
      .activeProjectsCommunityCategory ?? 0
  const marchCom =
    mainInfo?.chartActiveProjectsPerMonth[2].March.chartActiveProjects
      .activeProjectsCommunityCategory ?? 0
  const aprilCom =
    mainInfo?.chartActiveProjectsPerMonth[3].April.chartActiveProjects
      .activeProjectsCommunityCategory ?? 0
  const mayCom =
    mainInfo?.chartActiveProjectsPerMonth[4].May.chartActiveProjects
      .activeProjectsCommunityCategory ?? 0
  const juneCom =
    mainInfo?.chartActiveProjectsPerMonth[5].June.chartActiveProjects
      .activeProjectsCommunityCategory ?? 0
  const julyCom =
    mainInfo?.chartActiveProjectsPerMonth[6].July.chartActiveProjects
      .activeProjectsCommunityCategory ?? 0

  const dataCom = [
    januaryCom,
    februaryCom,
    marchCom,
    aprilCom,
    mayCom,
    juneCom,
    julyCom,
  ]

  const januaryCrea =
    mainInfo?.chartActiveProjectsPerMonth[0].January.chartActiveProjects
      .activeProjectsCreativeCategory ?? 0
  const februaryCrea =
    mainInfo?.chartActiveProjectsPerMonth[1].February.chartActiveProjects
      .activeProjectsCreativeCategory ?? 0
  const marchCrea =
    mainInfo?.chartActiveProjectsPerMonth[2].March.chartActiveProjects
      .activeProjectsCreativeCategory ?? 0
  const aprilCrea =
    mainInfo?.chartActiveProjectsPerMonth[3].April.chartActiveProjects
      .activeProjectsCreativeCategory ?? 0
  const mayCrea =
    mainInfo?.chartActiveProjectsPerMonth[4].May.chartActiveProjects
      .activeProjectsCreativeCategory ?? 0
  const juneCrea =
    mainInfo?.chartActiveProjectsPerMonth[5].June.chartActiveProjects
      .activeProjectsCreativeCategory ?? 0
  const julyCrea =
    mainInfo?.chartActiveProjectsPerMonth[6].July.chartActiveProjects
      .activeProjectsCreativeCategory ?? 0

  const dataCrea = [
    januaryCrea,
    februaryCrea,
    marchCrea,
    aprilCrea,
    mayCrea,
    juneCrea,
    julyCrea,
  ]

  const januaryTech =
    mainInfo?.chartActiveProjectsPerMonth[0].January.chartActiveProjects
      .activeProjectsTechCategory ?? 0
  const februaryTech =
    mainInfo?.chartActiveProjectsPerMonth[1].February.chartActiveProjects
      .activeProjectsTechCategory ?? 0
  const marchTech =
    mainInfo?.chartActiveProjectsPerMonth[2].March.chartActiveProjects
      .activeProjectsTechCategory ?? 0
  const aprilTech =
    mainInfo?.chartActiveProjectsPerMonth[3].April.chartActiveProjects
      .activeProjectsTechCategory ?? 0
  const mayTech =
    mainInfo?.chartActiveProjectsPerMonth[4].May.chartActiveProjects
      .activeProjectsTechCategory ?? 0
  const juneTech =
    mainInfo?.chartActiveProjectsPerMonth[5].June.chartActiveProjects
      .activeProjectsTechCategory ?? 0
  const julyTech =
    mainInfo?.chartActiveProjectsPerMonth[6].July.chartActiveProjects
      .activeProjectsTechCategory ?? 0

  const dataTech = [
    januaryTech,
    februaryTech,
    marchTech,
    aprilTech,
    mayTech,
    juneTech,
    julyTech,
  ]

  const title = 'Projects per month [Un]'
  const allData = [dataCom, dataCrea, dataTech]

  let { allProjects } = useAllProjects()
  allProjects = allProjects?.sort((a, b) => {
    if (a.title < b.title) {
      return -1
    }
    if (a.title > b.title) {
      return 1
    }

    return 0
  })
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 5

  const indexOfLastUser = currentPage * projectsPerPage
  const indexOfFirstUser = indexOfLastUser - projectsPerPage
  const projectsInTable = allProjects?.slice(indexOfFirstUser, indexOfLastUser)
  const totalPages = Math.ceil((allProjects?.length ?? 0) / projectsPerPage)

  const goToPreviousPage = (): void => {
    setCurrentPage((prevPage) => prevPage - 1)
  }

  const goToNextPage = (): void => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  //

  return (
    <div className='ml-10 flex h-fit flex-col '>
      <h2 className='mb-8 ml-48 items-center justify-center pl-20 pt-10 text-3xl text-secondary'>
        Projects Dashboard
      </h2>
      <LineChart
        title={title}
        data={allData}
        width={'w-[800px]'}
        fontSize={20}
        showLabels={true}
      />
      {projectsInTable !== null && (
        <div className='mt-5 flex h-[440px] flex-col justify-between rounded-lg bg-backgroundDark1 p-5'>
          <ProjectTable responseData={projectsInTable ?? []} />
          <div className='mb-2 h-[35px]'>
            {allProjects !== null &&
              allProjects !== undefined &&
              allProjects?.length > projectsPerPage && (
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
