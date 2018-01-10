import * as React from 'react';
import {Div} from 'glamorous';
import {dvptCoLegendData} from '../utils';
import {Legend} from '@di-pdfs/pdf-base';
import charts from '@di-pdfs/pdf-base/lib/charts';
import data from './data';

const options = {
    data: data.dvptCooperation,
    height: '260px',
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

const legendOptions = () => ({
        orientation: 'vertical',
        data: dvptCoLegendData('china')
    });

export default () =>
    <Div padding="5px" width="100%" display="flex" justifyContent="space-between" >
        <Div width="70%" key="stacked">
            <charts.StackedBar {...options} />
        </Div>
        <Div width="28%" key="legend">
            <Legend {...legendOptions()} />
        </Div>
    </Div>;
