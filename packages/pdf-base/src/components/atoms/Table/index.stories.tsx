import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Table from '.';

const data = [
    {ctry: 'Uga', dev: 20},
    {ctry: 'Moz', dev: 30},
    {ctry: 'Ke', dev: 40}
];

storiesOf('Table', module).add('Table', () =>
(<div style={{width: '20%', padding: '100px'}}>
    <Table data={data}  headings={['cty', 'dev']}/>
</div>
));
