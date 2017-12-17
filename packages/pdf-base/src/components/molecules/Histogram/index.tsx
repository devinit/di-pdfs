import * as React from 'react';
import config from './config';
import Chart from '../../atoms/Chart';
import {BaseConfig} from '../../atoms/Chart/types';
import * as R from 'ramda';

interface Props {
    config: BaseConfig;
    data: any[];
    height: string | number;
}

export default (props) =>
    (
        <Chart
            height={props.height}
            data={props.data}
            config={R.mergeDeepRight(config, props.config)}
        />
    );
