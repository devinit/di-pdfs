import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Treemap from '.';

const config = {
    labeling: {
        prefix: 'US$',
        showValues: false,
    }
};
const data = [
    {
      name: 'Montenegro',
      value: 66823169.184752956,
      color: '#0071b1',
    },
    {
      name: 'Uzbekistan',
      value: 234453969.7894683,
      color: '#5da3d9',
    },
    {
      name: 'Iraq',
      value: 2205781657.423498,
      color: '#0c457b',
    },
    {
      name: 'Albania',
      value: 360714017.52067727,
      color: '#0071b1',
    },
    {
      name: 'Congo',
      value: 1481557576.3263793,
      color: '#bc2629',
    },
    {
      name: 'South Asia, regional',
      value: 94202212.49565199,
      color: '#5da3d9',
    },
    {
      name: 'Venezuela',
      value: 48547250.54668666,
      color: '#7b3b89',
    }
  ];
const props = {config, data, height: '200px'};

storiesOf('Treemap', module).add('Treemap', () =>
    (<div style={{width: '50%', padding: '50px'}}>
        <Treemap {...props} />
    </div>
    ));
