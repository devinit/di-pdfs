export interface IAxis {
    axisLabel?: string;
    axisMaximum?: number;
    axisMinimum?: number;
    indicator: string;
}

export interface ILabeling {
    showLabels?: boolean;
    prefix?: string;
    suffix?: string;
    drawStackedBarSum?: boolean;
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
