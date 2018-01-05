import * as React from 'react';
import {Div} from 'glamorous';
import {dvptCoLegendData, getLegendData} from '../utils';
import {Legend, LegendProps} from '@di-pdfs/pdf-base';
import regionColors from '@di-pdfs/ssc-api/lib/modules/brazil/config';
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
    if (dataKey === 'dvptCooperation') {
        return {
            orientation: 'vertical',
            data: dvptCoLegendData('brazil')
        };
    }
    return techLegend();
};

export default (props: Props) =>
    <Div padding="5px" width="100%" display="flex" justifyContent="space-between" >
        <Div width="35%" key="stacked">
            <charts.StackedBar {...options(props.dataKey, props.groupBy)} />
        </Div>
        <Div width="50%" key="legend-stacked">
            <Legend {...legendOptions(props.dataKey)} />
        </Div>
    </Div>;
