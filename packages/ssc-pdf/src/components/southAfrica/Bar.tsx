import * as React from 'react';
import {Div} from 'glamorous';
import charts from '@devinit/pdf-base/lib/charts';
import data from './data';
import {reverse} from 'ramda';

const options = {
    data: reverse(data.dvptCooperationTrend),
    height: '180px',
    config: {
        linearAxis: {
            indicator: 'value',
          },
          categoryAxis: {
            indicator: 'year',
          },
    }
};

export default () =>
    <Div padding="5px" width="100%" display="flex" >
        <Div width="80%" key="stacked">
            <charts.Histogram {...options} />
        </Div>
    </Div>;
