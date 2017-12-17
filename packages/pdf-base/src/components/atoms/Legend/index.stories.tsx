import * as React from 'react';
import { storiesOf } from '@storybook/react';
import {red, green, blue} from '../../../theme/colors';
import Legend from '.';

const data = [
    {value: 'Uga', color: red},
    {value: 'Moz', color: green},
    {value: 'Ke', color: blue}
];

storiesOf('Legend', module)
    .add('legend vertical', () =>
        (<div style={{width: '20%', padding: '100px'}}>
            <Legend data={data} orientation="vertical" />
        </div>
        ))
    .add('legend horizontal', () =>
        (<div style={{width: '20%', padding: '100px'}}>
            <Legend data={data} orientation="horizontal" />
        </div>
        ));
