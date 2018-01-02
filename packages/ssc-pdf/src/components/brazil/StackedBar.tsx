import * as React from 'react';
import {Div} from 'glamorous';
import {dvptCoLegendData} from '../utils';
import {Legend, LegendProps} from '@di-pdfs/pdf-base';
import charts from '@di-pdfs/pdf-base/lib/charts';
import data from './data';

const options = (dataKey: string, groupBy: string) => ({
    data: data[dataKey],
    height: '300px',
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
const legendOptions: LegendProps = {
    orientation: 'vertical',
    data: dvptCoLegendData('brazil')
};

export default (props: Props) =>
    <Div padding="10px" width="100%" display="flex" justifyContent="space-between" >
        <Div width="35%" key="stacked">
            <charts.StackedBar {...options(props.dataKey, props.groupBy)} />
        </Div>
        <Div width="50%" key="legend-stacked">
            <Legend {...legendOptions} />
        </Div>
    </Div>;
