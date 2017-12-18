import * as React from 'react';
import { storiesOf } from '@storybook/react';
import StackedBar from '.';

const config = {
    groupBy: 'Years',
    linearAxis: {
        axisLabel: 'Rainfall (mm)',
        indicator: 'Rainfall',
      },
      categoryAxis: {
        axisLabel: 'Months',
        indicator: 'Months',
      },
};

const data = [
    { Rainfall: 1000000, Years: '1992', Months: 'Jan' },
    { Rainfall: 2000000, Years: '1992', Months: 'Feb' },
    { Rainfall: 1200000, Years: '1992', Months: 'Mar' },
    { Rainfall: 2700000, Years: '1992', Months: 'Apr' },
    { Rainfall: 2300000, Years: '1992', Months: 'May' },
    { Rainfall: 2100000, Years: '1992', Months: 'Jun' },
    { Rainfall: 1230000, Years: '1993', Months: 'Jan' },
    { Rainfall: 2340000, Years: '1993', Months: 'Feb' },
    { Rainfall: 3420000, Years: '1993', Months: 'Mar' },
    { Rainfall: 2340000, Years: '1993', Months: 'Apr' },
    { Rainfall: 3540000, Years: '1993', Months: 'May' },
    { Rainfall: 1230000, Years: '1993', Months: 'Jun' }
  ];

const props = {config, data, height: '300px'};

storiesOf('Stacked Bar', module).add('Brazil config', () =>
    (<div style={{width: '40%', padding: '50px'}}>
        <StackedBar {...props} />
    </div>
    ));
