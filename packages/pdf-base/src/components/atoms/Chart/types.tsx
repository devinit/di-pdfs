export interface IAxis {
    axisLabel: string;
    indicator: string;
}

export interface IBaseConfig {
      linearAxis: IAxis;
      categoryAxis: IAxis;
      labeling?: object;
}
export interface ILegend {
    showLegend: boolean;
    position: string;
    alignment: string;
}
