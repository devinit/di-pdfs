import * as React from 'react';
import config from './config';
import Chart from '../../atoms/Chart';
import {IBaseConfig} from '../../atoms/Chart/types';
import * as R from 'ramda';

interface Props {
    config: IBaseConfig;
    data: any[];
    height: string;
}

export default (props: Props) =>
    (
        <Chart
            height={props.height}
            data={props.data}
            config={R.mergeDeepRight(config, props.config)}
        />
    );
