import { PieChart, SelectDash, LineChart } from '../components'
import BuildIcon from '@mui/icons-material/Build'
import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import { useDashboardMainInfo } from '../hooks/useDashboardMainInfo'
export const ResumeDashboard: React.FC = () => {
  const title = 'Funds ($)'
  const arrColor = [
    'rgba(193, 52, 82, 0.5)',
    'rgba(20, 146, 200, 0.5)',
    'rgba(86, 191, 73, 0.5)',
  ]
  const { mainInfo } = useDashboardMainInfo()
  const fundCommunty =
    mainInfo?.chartTotalFundsRaised.fundingCurrentCommunityCategory ?? 0
  const fundCreative =
    mainInfo?.chartTotalFundsRaised.fundingCurrentCommunityCategory ?? 0
  const fundTech =
    mainInfo?.chartTotalFundsRaised.fundingCurrentCommunityCategory ?? 0
  const data = [fundTech * 5, fundCreative * 2, fundCommunty / 2]

  const funds =
    mainInfo?.totalFundsRaised != null
      ? Math.floor(mainInfo.totalFundsRaised / 1000)
      : 0
  const usersN = mainInfo?.allRegisteredUsers
  const projectsN = mainInfo?.activeProjects

  // Array de datos para el Line Chart :
  const januaryCom =
    mainInfo?.chartFundsRaisedPerMonth[0].January.chartTotalFundsRaised
      .fundingCurrentCommunityCategory ?? 0
  const februaryCom =
    mainInfo?.chartFundsRaisedPerMonth[1].February.chartTotalFundsRaised
      .fundingCurrentCommunityCategory ?? 0
  const marchCom =
    mainInfo?.chartFundsRaisedPerMonth[2].March.chartTotalFundsRaised
      .fundingCurrentCommunityCategory ?? 0
  const aprilCom =
    mainInfo?.chartFundsRaisedPerMonth[3].April.chartTotalFundsRaised
      .fundingCurrentCommunityCategory ?? 0
  const mayCom =
    mainInfo?.chartFundsRaisedPerMonth[4].May.chartTotalFundsRaised
      .fundingCurrentCommunityCategory ?? 0
  const juneCom =
    mainInfo?.chartFundsRaisedPerMonth[5].June.chartTotalFundsRaised
      .fundingCurrentCommunityCategory ?? 0
  const julyCom =
    mainInfo?.chartFundsRaisedPerMonth[6].July.chartTotalFundsRaised
      .fundingCurrentCommunityCategory ?? 0

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
    mainInfo?.chartFundsRaisedPerMonth[0].January.chartTotalFundsRaised
      .fundingCurrentCreativeCategory ?? 0
  const februaryCrea =
    mainInfo?.chartFundsRaisedPerMonth[1].February.chartTotalFundsRaised
      .fundingCurrentCreativeCategory ?? 0
  const marchCrea =
    mainInfo?.chartFundsRaisedPerMonth[2].March.chartTotalFundsRaised
      .fundingCurrentCreativeCategory ?? 0
  const aprilCrea =
    mainInfo?.chartFundsRaisedPerMonth[3].April.chartTotalFundsRaised
      .fundingCurrentCreativeCategory ?? 0
  const mayCrea =
    mainInfo?.chartFundsRaisedPerMonth[4].May.chartTotalFundsRaised
      .fundingCurrentCreativeCategory ?? 0
  const juneCrea =
    mainInfo?.chartFundsRaisedPerMonth[5].June.chartTotalFundsRaised
      .fundingCurrentCreativeCategory ?? 0
  const julyCrea =
    mainInfo?.chartFundsRaisedPerMonth[6].July.chartTotalFundsRaised
      .fundingCurrentCreativeCategory ?? 0

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
    mainInfo?.chartFundsRaisedPerMonth[0].January.chartTotalFundsRaised
      .fundingCurrentTechCategory ?? 0
  const februaryTech =
    mainInfo?.chartFundsRaisedPerMonth[1].February.chartTotalFundsRaised
      .fundingCurrentTechCategory ?? 0
  const marchTech =
    mainInfo?.chartFundsRaisedPerMonth[2].March.chartTotalFundsRaised
      .fundingCurrentTechCategory ?? 0
  const aprilTech =
    mainInfo?.chartFundsRaisedPerMonth[3].April.chartTotalFundsRaised
      .fundingCurrentTechCategory ?? 0
  const mayTech =
    mainInfo?.chartFundsRaisedPerMonth[4].May.chartTotalFundsRaised
      .fundingCurrentTechCategory ?? 0
  const juneTech =
    mainInfo?.chartFundsRaisedPerMonth[5].June.chartTotalFundsRaised
      .fundingCurrentTechCategory ?? 0
  const julyTech =
    mainInfo?.chartFundsRaisedPerMonth[6].July.chartTotalFundsRaised
      .fundingCurrentTechCategory ?? 0

  const dataTech = [
    januaryTech,
    februaryTech,
    marchTech,
    aprilTech,
    mayTech,
    juneTech,
    julyTech,
  ]

  const contribData = [dataCom, dataCrea, dataTech]

  return (
    <div className='flex flex-row justify-evenly'>
      <div className='h-fit w-[495px] rounded-lg bg-backgroundDark1 p-3 '>
        <div className='flex h-12 items-center'>
          <div className='flex-1 pb-2 text-white'>
            <h1 className='text-xl'>Title </h1>
            <h1 className='text-sm font-thin'>Something</h1>
          </div>
          <SelectDash />
        </div>
        <div id='Contenedor' className='flex w-full justify-between text-white'>
          <div className='h-[350px] w-[310px] rounded-lg bg-backgroundDark3 p-5'>
            <LocalAtmIcon style={{ fontSize: 100, color: '#38b000' }} />
            <div className='pl-2.5'>
              <h1>Total Contributions</h1>
              <h1 className='text-xl'>
                $ {funds.toLocaleString(undefined, { useGrouping: true })} K
              </h1>
              <div className='mt-8 flex justify-center text-xl'>
                <LineChart
                  title={'Contributios per month [$]'}
                  data={contribData}
                  width={'w-[250px]'}
                  fontSize={8}
                  showLabels={false}
                />
              </div>
            </div>
          </div>
          <div>
            <div className='mb-2.5 h-[170px] w-[150px] rounded-lg bg-backgroundDark3 p-6'>
              <BuildIcon style={{ fontSize: 40, color: '#ff9410' }} />
              <h1>Total Projects</h1>
              <h1 className='text-xl'>{projectsN}</h1>
            </div>
            <div className='h-[170px] w-[150px] rounded-lg bg-backgroundDark3 p-6'>
              <PeopleOutlineIcon style={{ fontSize: 40, color: '#3a86ff' }} />
              <h1>Total Users</h1>
              <h1 className='text-xl'>{usersN}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[600px]'>
        <PieChart
          title={title}
          labels={['Tech & Innovation', 'Creative Works', 'Community Projects']}
          data={data}
          backgroundColor={arrColor}
          width={'w-[400px]'}
        />
      </div>
    </div>
  )
}
