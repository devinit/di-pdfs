export interface Axis {
    axisLabel: string;
    indicator: string;
}

export interface BaseConfig {
      linearAxis: Axis;
      categoryAxis: Axis;
      labeling?: object;
}
