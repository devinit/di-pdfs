import * as React from 'react';
import {red} from '../../../theme/colors';
import {Header} from 'glamorous';

export interface Props {
    title: string;
    downlaodLink?: string;
}

export default (props: Props) =>
    (<Header borderBottom={`10px solid ${red}`}>
        <h1>{props.title}</h1>
    </Header>);
