import * as React from 'react';
import { storiesOf } from '@storybook/react';
import base from './config';

import * as R from 'ramda';
import Histogram from '.';

const config = {
    linearAxis: {
        axisLabel: 'Price',
        indicator: 'value',
      },
      categoryAxis: {
        axisLabel: 'Years',
        indicator: 'year'
      },
};
const data = [
    {value: 318.3, year: 'A'},
    {value: 301.6, year: 'B'},
    {value: 238.1, year: 'C'},
];

const props = {config, data, height: '200px'};

storiesOf('Histogram', module).add('Brazil config', () =>
    (<div style={{width: '20%', padding: '100px'}}>
        <Histogram {...props} />
    </div>
    ));
