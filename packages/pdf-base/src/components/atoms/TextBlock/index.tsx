import * as React from 'react';
import glamorous, {GlamorousComponentProps} from 'glamorous';
import {red} from '../../../theme/colors';

interface Props {
//    children?: React.ReactChild[];
   marginTop?: string;
   children?: React.ReactChild | React.ReactChild[];
}

const TextBlock = glamorous.div<{marginTop?: string}>({
        display: 'flex',
        width: '100%',
        marginBottom: '1em',
        lineHeight: '1.3em'
    },
    (props) => ({
        marginTop: props.marginTop || '0px'
    })
);

const getDate = () => {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export default (props: Props) =>
    (<TextBlock marginTop={props.marginTop}>
       {props.children}
    </TextBlock>);
