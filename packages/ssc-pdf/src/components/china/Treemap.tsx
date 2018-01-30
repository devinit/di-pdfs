import * as React from 'react';
import {Div} from 'glamorous';
import {getLegendData} from '../utils';
import {odaRegionColors} from '@devinit/ssc-api/lib/modules/china/config';
import charts from '@devinit/pdf-base/lib/charts';
import {Legend} from '@devinit/pdf-base';
import data from './data';

const transformName = (name: string) => {
    if (name.includes('(')) return name.split('(')[0];
    return name;
};

const options = () => ({
    data: data.odaRecipients.map(obj => ({...obj, name: transformName(obj.recipient)})),
    height: '250px',
    config: {
        labeling: {
            showValues: false,
            showPercents: true,
        }
    }
});
const legendOptions = () => ({
    orientation: 'horizontal',
    data: getLegendData({legendData: odaRegionColors})
});

export default () =>
    <Div padding="5px" width="100%" display="flex" flexDirection="column" >
        <Div width="100%" key="stacked">
            <charts.Treemap {...options()} />
        </Div>
        <Div paddingTop="20px" >
            <Legend {...legendOptions()} />
        </Div>
    </Div>;
