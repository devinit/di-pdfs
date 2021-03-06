import * as React from 'react';
import {Div} from 'glamorous';
import {dvptCoLegendData, getLegendData} from '../utils';
import {Legend} from '@devinit/pdf-base';
import regionColors from '@devinit/ssc-api/lib/modules/brazil/config';
import charts from '@devinit/pdf-base/lib/charts';
import data from './data';

const options = (dataKey: string, groupBy: string) => ({
    data: data[dataKey],
    height: '200px',
    config: {
        groupBy,
        linearAxis: {
            indicator: 'value',
            ticking: dataKey === 'dvptCooperation' ? 'even' : 'all',
            axisMaximum: dataKey === 'dvptCooperation' ? 450 : 100
        },
        labeling: {
            drawStackedBarSum: dataKey === 'dvptCooperation',
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

const legendOptions = (dataKey: string) => {
    if (dataKey === 'dvptCooperation') {
        return {
            orientation: 'vertical',
            data: dvptCoLegendData('brazil')
        };
    }
    return {
        orientation: 'vertical',
        data: getLegendData({
                legendData: regionColors,
                data: data[dataKey],
                keyName: 'region'
            })
    };
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
