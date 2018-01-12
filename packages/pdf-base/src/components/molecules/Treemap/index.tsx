import * as React from 'react';
import config from './config';
import Chart from '../../atoms/Chart';
import * as R from 'ramda';

export interface Props {
    config: {
        labeling: {
            prefix?: string;
            autofit?: true;
            showValues?: boolean;
        };
    };
    data: Array<{color?: string; value: number; name: string}>;
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
