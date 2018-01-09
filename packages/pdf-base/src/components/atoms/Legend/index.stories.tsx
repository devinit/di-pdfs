import * as React from 'react';
import { storiesOf } from '@storybook/react';
import {red, green, blue} from '../../../theme/colors';
import Legend from '.';

const data = [
    {value: 'Coopertion between South Africa and other states', color: red},
    {value: 'Socio-economic  development and integratio', color: green},
    {value: 'Ke', color: blue}
];

storiesOf('Legend', module)
    .add('legend vertical', () =>
        (<div style={{width: '10%', padding: '10px'}}>
            <Legend data={data} orientation="vertical" />
        </div>
        ))
    .add('legend horizontal', () =>
        (<div style={{width: '20%', padding: '100px'}}>
            <Legend data={data} orientation="horizontal" />
        </div>
        ));
