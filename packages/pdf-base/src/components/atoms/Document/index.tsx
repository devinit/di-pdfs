import * as React from 'react';
import glamorous from 'glamorous';

export interface Props {
    children: React.ReactChild[] | React.ReactChild;
}

const Document = glamorous.div({
    display: 'block',
    width: '210mm',
    margin: '0 auto',
});

export default (props: Props) => (<Document>{props.children}</Document>);
