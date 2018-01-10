import * as React from 'react';
import { storiesOf } from '@storybook/react';
import {red, blue, purple, orange, pink, darkerRed} from '../../../theme/colors';
import Pie from '.';

const config = {
    circular: {
        label: 'country',
        value: 'value'
    },
    legend: {
        showLegend: true,
        position: 'bottom',
        alignment: 'center'
    }
};

const data = [
    { country: '‌Burundi', value: 29030000, color: pink },
    { country: 'Kenya', value: 46050000, color: blue },
    { country: 'Tanzania', value: 53470000, color:  red},
    { country: 'Tanzania', value: 53470000, color:  darkerRed},
    { country: '‌Rwanda', value: 190000, color: orange },
    { country: '‌Uganda', value: 39030000, color: purple }
];

const props = {config, data, height: '200px'};

storiesOf('Pie', module).add('Pie', () =>
    (<div style={{width: '30%', padding: '50px'}}>
        <Pie {...props} />
    </div>
    ));
