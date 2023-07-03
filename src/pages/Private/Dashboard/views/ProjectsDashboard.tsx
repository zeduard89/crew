import { LineChart } from '../components'
import { useDashboardMainInfo } from '../hooks/useDashboardMainInfo'
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

  return (
    <div className='ml-10 flex flex-col'>
      <h2 className='mb-8 ml-48 items-center justify-center pl-20 pt-10 text-3xl text-secondary'>
        Projects Dashboard
      </h2>
      <div className='w-[500px]'>
        <LineChart
          title={title}
          data={allData}
          width={'w-[800px]'}
          fontSize={20}
          showLabels={true}
        />
      </div>
    </div>
  )
}
