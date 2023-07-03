export interface IDashboardMainInfo {
    totalFundsRaised: number;
    chartTotalFundsRaised: IFundsRaisedByCategory;
    chartFundsRaisedPerMonth: IFundsRaisedPerMonth[];
    allRegisteredUsers: number;
    chartRegisteredUsersPerMonth: IRegisteredUsersPerMonth[];
    activeProjects: number;
    chartActiveProjects: IChartActiveProjects;
    chartActiveProjectsPerMonth: IActiveProjectsPerMonth[];
}
  
export interface IFundsRaisedByCategory {
    fundingCurrentCommunityCategory: number;
    fundingCurrentCreativeCategory: number;
    fundingCurrentTechCategory: number;
}
  
export type IFundsRaisedPerMonth = Record<string, {
    totalFundsRaised: number;
    chartTotalFundsRaised: IFundsRaisedByCategory;
}>;
  
export interface IRegisteredUsersPerMonth {
    month: string;
    totalRegisteredUsers: number;
}
  
export interface IChartActiveProjects {
    activeProjectsCommunityCategory: number;
    activeProjectsCreativeCategory: number;
    activeProjectsTechCategory: number;
}
  
export type IActiveProjectsPerMonth = Record<string, {
    activeProjects: number;
    chartActiveProjects: IChartActiveProjects;
}>;
  