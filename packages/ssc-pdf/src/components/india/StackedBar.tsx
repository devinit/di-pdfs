import * as React from 'react';
import glamorous, {Div} from 'glamorous';
import {dvptCoLegendData, getLegendData} from '../utils';
import {Legend, LegendProps} from '@devinit/pdf-base';
import regionColors from '@devinit/ssc-api/lib/modules/india/config';
import charts from '@devinit/pdf-base/lib/charts';
import data from './data';

const options = (dataKey: string, groupBy: string) => ({
    data: data[dataKey],
    height: '195px',
    config: {
        groupBy,
        linearAxis: {
            indicator: 'value',
            ticking: dataKey === 'dvptCooperation' ? 'all' : 'even'
        },
        categoryAxis: {
            indicator: 'year'
        }
    }
});

interface Props {
    dataKey: string;
    groupBy: string;
}

const techLegend = (): LegendProps =>
    ({orientation: 'vertical', data: getLegendData({legendData: regionColors})});

const legendOptions = (dataKey: string) => {
    if (dataKey === 'dvptCooperation') {
        return {
            orientation: 'vertical',
            data: dvptCoLegendData('india')
        };
    }
    return techLegend();
};
const StackedChartDiv = glamorous.div({
    'width': '72%',
    '& .plottable .custom-label': {
        width: '45%'
    }
});
export default (props: Props) =>
    <Div padding="5px" width="100%" display="flex" justifyContent="space-between" >
        <StackedChartDiv key="stacked">
            <charts.StackedBar {...options(props.dataKey, props.groupBy)} />
        </StackedChartDiv>
        <Div width="26%" key="legend-stacked">
            <Legend {...legendOptions(props.dataKey)} />
        </Div>
    </Div>;
