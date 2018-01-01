import * as React from 'react';
import {Div} from 'glamorous';
import {dvptCoLegendData} from '../utils';
import {Legend} from '@di-pdfs/pdf-base';
import {LegendProps} from '@di-pdfs/pdf-base';
import charts from '@di-pdfs/pdf-base/lib/charts';
import data from './data';

const options = {
    data: data.dvptCooperation,
    height: '250px',
    config: {
        groupBy: 'id',
        linearAxis: {
            indicator: 'value',
        },
        categoryAxis: {
            axisLabel: 'Years',
            indicator: 'year'
        }
    }
};

const legendOptions: LegendProps = {
    orientation: 'vertical',
    data: dvptCoLegendData('brazil')
};

export default () =>
    <Div padding="10px" width="70%" display="flex" justifyContent="space-between" >
        <Div width="40%" key="stacked">
            <charts.StackedBar {...options} />
        </Div>
        <Div width="40%" key="legend-stacked">
            <Legend {...legendOptions} />
        </Div>
    </Div>;
