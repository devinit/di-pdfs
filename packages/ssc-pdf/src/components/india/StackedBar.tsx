import * as React from 'react';
import {Div} from 'glamorous';
import {dvptCoLegendData, getLegendData} from '../utils';
import {Legend, LegendProps} from '@devinit/pdf-base';
import regionColors from '@devinit/ssc-api/lib/modules/india/config';
import charts from '@devinit/pdf-base/lib/charts';
import data from './data';

const options = (dataKey: string, groupBy: string) => ({
    data: data[dataKey],
    height: '200px',
    config: {
        groupBy,
        linearAxis: {
            indicator: 'value',
        },
        categoryAxis: {
            axisLabel: 'Years',
            indicator: 'year'
        }
    }
});

interface Props {
    dataKey: string;
    groupBy: string;
}

const techLegend = (): LegendProps =>
    ({orientation: 'vertical', data: getLegendData(regionColors)});

const legendOptions = (dataKey: string) => {
    if (dataKey === 'dvptCooperation') {
        return {
            orientation: 'vertical',
            data: dvptCoLegendData('india')
        };
    }
    return techLegend();
};

console.log(legendOptions('dvptCooperation'));

console.log(techLegend());

export default (props: Props) =>
    <Div padding="5px" width="100%" display="flex" justifyContent="space-between" >
        <Div width="70%" key="stacked">
            <charts.StackedBar {...options(props.dataKey, props.groupBy)} />
        </Div>
        <Div width="28%" key="legend-stacked">
            <Legend {...legendOptions(props.dataKey)} />
        </Div>
    </Div>;
