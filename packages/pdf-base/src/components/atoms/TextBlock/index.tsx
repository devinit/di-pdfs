import * as React from 'react';
import glamorous from 'glamorous';
interface Props {
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

export default (props: Props) =>
    (<TextBlock marginTop={props.marginTop}>
       {props.children}
    </TextBlock>);