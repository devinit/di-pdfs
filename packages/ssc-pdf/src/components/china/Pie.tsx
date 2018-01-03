import * as React from 'react';
import {Div} from 'glamorous';
import charts from '@di-pdfs/pdf-base/lib/charts';
import {getLegendData} from '../utils';
import {sectorColors, regionColors} from '@di-pdfs/ssc-api/lib/modules/china/config';
import {Legend} from '@di-pdfs/pdf-base';
import data from './data';

const options = (dataKey: string) => ({
    data: data[dataKey],
    height: '200px',
    config: {
        circular: {
            label: 'country',
            value: 'value'
        },
    }
});

const legendOptions = (legendData: object) => ({
    orientation: 'horizontal',
    data: getLegendData(legendData)
});

interface Props {
    dataKey: string;
}

export default (props: Props) =>
    <Div padding="5px" width="100%" display="flex" justifyContent="space-between" >
        <Div width="50%" key="stacked">
            <charts.Pie {...options(props.dataKey)} />
            <Legend {...legendOptions(regionColors)} />
        </Div>
        <Div width="50%" key="stacked">
            <charts.Pie {...options(props.dataKey)} />
            <Legend {...legendOptions(sectorColors)} />
        </Div>
    </Div>;
