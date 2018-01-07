import * as React from 'react';
import {Div} from 'glamorous';
import charts from '@di-pdfs/pdf-base/lib/charts';
import {getLegendData} from '../utils';
import {sectorColors} from '@di-pdfs/ssc-api/lib/modules/southAfrica/config';
import {Legend} from '@di-pdfs/pdf-base';
import data from './data';

const options = (chartData, label) => ({
    data: chartData,
    height: '200px',
    config: {
        circular: {
            label,
            value: 'value'
        },
    }
});

const legendOptions = (legendData: object) => ({
    orientation: 'horizontal',
    data: getLegendData(legendData)
});
console.log(legendOptions(sectorColors));

export default () =>
    <Div padding="5px" width="100%" display="flex" justifyContent="space-between" >
        <Div width="50%" key="stacked" display="flex" flexDirection="column">
            <div>
                <charts.Pie {...options(data.aricfExpBySector, 'region')} />
            </div>
            <Div paddingTop="10px">
                <Legend {...legendOptions(sectorColors)} />
            </Div>
        </Div>
    </Div>;
