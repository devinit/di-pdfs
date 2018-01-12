export interface IAxis {
    axisLabel?: string;
    indicator: string;
}

export interface ILabeling {
    showLabel: boolean;
    prefix?: string;
    suffix?: string;
}

export interface IBaseConfig {
      linearAxis: IAxis;
      categoryAxis: IAxis;
      labeling?: ILabeling;
}
export interface ILegend {
    showLegend: boolean;
    position: string;
    alignment: string;
}
