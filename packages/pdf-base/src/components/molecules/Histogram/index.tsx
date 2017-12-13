import * as React from 'react';
import config from './config';
import Chart from '../../atoms/Chart';
import * as R from 'ramda';

interface Props {
  data: any;
  config: object;
}

export default (props) =>
    (
        <Chart
            height={props.height}
            data={props.data}
            config={R.mergeDeepRight(config, props.config)}
        />
    );
