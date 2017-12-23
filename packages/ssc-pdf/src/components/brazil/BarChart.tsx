import * as React from 'react';
import {Div} from 'glamorous';
import {dvptCoLegendData} from '../utils';
import {Legend} from '@di-pdfs/pdf-base';
import {LegendProps} from '@di-pdfs/pdf-base/src';
import charts, {HiProps} from '@di-pdfs/pdf-base/src/charts';
import data from './data';

const options: HiProps = {
    data: data.dvptCooperation,
    height: '250px',
    config: {
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
    <Div display="flex" flexDirection="row" padding="10px">
        <Div width="60%">
            <charts.Histogram {...options} />
        </Div>
        <Div width="40%">
            <Legend {...legendOptions} />
        </Div>
    </Div>;
