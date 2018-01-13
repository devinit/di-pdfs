import * as React from 'react';
import {Div} from 'glamorous';
import charts from '@devinit/pdf-base/lib/charts';
import {getLegendData} from '../utils';
import {sectorColors} from '@devinit/ssc-api/lib/modules/southAfrica/config';
import {Legend} from '@devinit/pdf-base';
import data from './data';

const options = (chartData, label) => ({
    data: chartData,
    height: '150px',
    config: {
        circular: {
            label,
            value: 'value'
        },
    }
});

const legendOptions = (legendData: object) => ({
    orientation: 'vertical',
    data: getLegendData({legendData, data: data.aricfExpBySector, keyName: 'sector'})
});
// console.log(legendOptions(sectorColors));

export default () =>
    <Div padding="0px" width="100%" display="flex" justifyContent="space-between" >
        <Div width="40%" key="pie">
            <charts.Pie {...options(data.aricfExpBySector, 'region')} />
        </Div>
        <Div paddingTop="0px" width="55%">
            <Legend {...legendOptions(sectorColors)} />
        </Div>
    </Div>;
