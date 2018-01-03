import * as React from 'react';
import {Div} from 'glamorous';
import charts from '@di-pdfs/pdf-base/lib/charts';
import {getLegendData} from '../utils';
import {sectorColors, regionColors} from '@di-pdfs/ssc-api/lib/modules/china/config';
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

export default () =>
    <Div padding="5px" width="100%" display="flex" justifyContent="space-between" >
        <Div width="50%" key="stacked" display="flex" flexDirection="column">
            <div>
                <charts.Pie {...options(data.flowsByRegion, 'region')} />
            </div>
            <Div paddingTop="10px">
                <Legend {...legendOptions(regionColors)} />
            </Div>
        </Div>
        <Div width="50%" key="stacked"  display="flex" flexDirection="column">
            <charts.Pie {...options(data.flowsBySector, 'sector')} />
            <Div paddingTop="10px">
                <Legend {...legendOptions(sectorColors)} />
            </Div>
        </Div>
    </Div>;
