import * as React from 'react';
import {Div} from 'glamorous';
import charts from '@di-pdfs/pdf-base/lib/charts';
import data from './data';

const options = {
    data: data.overallMultiExpenditure,
    height: '200px',
    config: {
        linearAxis: {
            indicator: 'value',
          },
          categoryAxis: {
            indicator: 'year'
          },
    }
};

export default () =>
    <Div padding="5px" width="100%" display="flex" >
        <Div width="80%" key="stacked">
            <charts.Histogram {...options} />
        </Div>
    </Div>;
