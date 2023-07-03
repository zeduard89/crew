import { LineChart } from '../components'
import { useDashboardMainInfo } from '../hooks/useDashboardMainInfo'
export const ContributionsDashboard: React.FC = () => {
  const { mainInfo } = useDashboardMainInfo()
  // const { dataCom, dataCrea, dataTech } = getProjectsData(mainInfo)

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

  const title = 'Contributios per month [$]'
  const allData = [dataCom, dataCrea, dataTech]
  return (
    <div className='ml-10 flex flex-col'>
      <h2 className='mb-8 ml-40 items-center justify-center pl-20 pt-10 text-3xl text-secondary'>
        ContributionsDashboard
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
