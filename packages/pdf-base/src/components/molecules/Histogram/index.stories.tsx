import * as React from 'react';
import { storiesOf } from '@storybook/react';
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
    {value: 318.3, year: '2001'},
    {value: 301.6, year: '2002'},
    {value: 238.1, year: '2003'},
];

const props = {config, data, height: '200px'};

storiesOf('Histogram', module).add('Brazil config', () =>
    (<div style={{width: '30%', padding: '50px'}}>
        <Histogram {...props} />
    </div>
    ));
