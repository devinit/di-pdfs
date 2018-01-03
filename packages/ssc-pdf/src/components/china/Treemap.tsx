import * as React from 'react';
import {Div} from 'glamorous';
import {getLegendData} from '../utils';
import {odaRegionColors} from '@di-pdfs/ssc-api/lib/modules/china/config';
import charts from '@di-pdfs/pdf-base/lib/charts';
import {Legend} from '@di-pdfs/pdf-base';
import data from './data';

const options = () => ({
    data: data.odaRecipients.map(obj => ({...obj, name: obj.recipient})),
    height: '250px',
    config: {
        labeling: {
            prefix: 'US$'
        }
    }
});
const legendOptions = () => ({
    orientation: 'horizontal',
    data: getLegendData(odaRegionColors)
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
