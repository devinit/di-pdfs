import * as React from 'react';
import glamorous, {Span} from 'glamorous';
import {red} from '../../../theme/colors';

interface Props {
   text: string;
}

const FootNote = glamorous.div({
    display: 'inline-block',
    position: 'absolute',
    paddingBottom: '3mm',
    bottom: '0',
    fontSize: '9px'
});

const getDate = () => {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export default (props: Props) =>
    (<FootNote>
        <Span color={red}>{props.text}{' '}|</Span>
        <span>Version {getDate()}</span>
    </FootNote>);
