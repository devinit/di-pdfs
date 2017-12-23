import * as React from 'react';
import { storiesOf } from '@storybook/react';
import BarChart from './BarChart';

storiesOf('Brazil charts', module)
    .add('dvpt Bar chart', () =>
        (<BarChart />
    ));
