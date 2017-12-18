import * as React from 'react';
import {Span} from 'glamorous';
import {colorMap} from '../../../util';

interface Props {
   text: string;
   color?: 'red' | 'black';
}

export default (props: Props) =>
    (<Span color={props.color ? colorMap[props.color] : colorMap.black}>
        {props.text}
    </Span>);
