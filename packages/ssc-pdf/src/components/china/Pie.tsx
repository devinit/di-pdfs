import * as React from 'react';
import {Div} from 'glamorous';
import charts from '@devinit/pdf-base/lib/charts';
import {getLegendData} from '../utils';
import {sectorColors, regionColors} from '@devinit/ssc-api/lib/modules/china/config';
import {Legend} from '@devinit/pdf-base';
import data from './data';

// const showSomeLabels = (elm: HTMLElement) => {
//     const svg = elm.firstChild as HTMLElement;
//     const plot = svg.lastChild as HTMLElement;
//     const renderArea = plot.children[1].firstChild as HTMLElement;
//     const labeArea = renderArea.lastChild as HTMLElement;
//     console.log(labeArea);
// };

const options = (chartData, label) => ({
    data: chartData,
    height: '200px',
    // callback: showSomeLabels,
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
        <Div width="50%" key="region" display="flex" flexDirection="column">
            <div>
                <charts.Pie {...options(data.flowsByRegion, 'region')} />
            </div>
            <Div paddingTop="10px">
                <Legend {...legendOptions(regionColors)} />
            </Div>
        </Div>
        <Div width="50%" key="flows"  display="flex" flexDirection="column">
            <charts.Pie {...options(data.flowsBySector, 'sector')} />
            <Div paddingTop="10px">
                <Legend {...legendOptions(sectorColors)} />
            </Div>
        </Div>
    </Div>;
