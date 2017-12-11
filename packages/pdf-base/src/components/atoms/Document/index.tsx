import * as React from 'react';
import glamorous, {Div} from 'glamorous';

interface Props {
    children: React.ReactChild[];
    child?: React.ReactChild;
}

const Document = glamorous.div({
    display: 'block',
    width: '210mm',
    margin: '0 auto',
});

export default (props: Props) => (<Document>{props.children || props.child}</Document>);
