import * as React from 'react';
import { storiesOf } from '@storybook/react';
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
    { country: 'Tanzania', value: 53470000 },
    { country: 'Kenya', value: 46050000 },
    { country: '‌Uganda', value: 39030000 },
];

const props = {config, data, height: '200px'};

storiesOf('Pie', module).add('Pie', () =>
    (<div style={{width: '30%', padding: '50px'}}>
        <Pie {...props} />
    </div>
    ));
