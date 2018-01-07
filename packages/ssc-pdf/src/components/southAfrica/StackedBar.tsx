import * as React from 'react';
import {Div} from 'glamorous';
import {getLegendData} from '../utils';
import {regionColors} from '@di-pdfs/ssc-api/lib/modules/southAfrica/config';
import {Legend, LegendProps} from '@di-pdfs/pdf-base';
import charts from '@di-pdfs/pdf-base/lib/charts';
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
    if (dataKey === 'govmtdepartment') {
        return {
            orientation: 'vertical',
            data: data.govmtdepartment
        };
    }
    return techLegend();
};

// console.log(legendOptions('govmtdepartment'));

// console.log(techLegend());

export default (props: Props) =>
    <Div padding="5px" width="100%" display="flex" justifyContent="space-between" >
        <Div width="70%" key="stacked">
            <charts.StackedBar {...options(props.dataKey, props.groupBy)} />
        </Div>
        <Div width="28%" key="legend-stacked">
            <Legend {...legendOptions(props.dataKey)} />
        </Div>
    </Div>;
