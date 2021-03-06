import * as React from 'react';
import config from './config';
import {ILegend, ILabeling} from '../../atoms/Chart/types';
import Chart from '../../atoms/Chart';
import * as R from 'ramda';

export interface Props {
    config: {
        circular: {
            label: string;
            value: string;
            innerRadius?: number; // donut settings
            strokeWidth?: number;
            strokeColor?: string ;
        }
        labeling?: ILabeling;
        legend?: ILegend // uses inbuilt legend, you may as well use the html based one in atoms
    };
    callback?: (elm: HTMLElement) => void;
    data: any[];
    height: string;
}

export default (props: Props) =>
    (
        <Chart
            height={props.height}
            data={props.data}
            callback={props.callback}
            config={R.mergeDeepRight(config, props.config)}
        />
    );
