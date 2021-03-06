import * as React from 'react';
import glamorous, { Div } from 'glamorous';

export type  Orientation = 'horizontal' | 'vertical';
export interface Props {
    orientation: Orientation;
    data: Array<{
        color: string;
        value: string;
    }>;
}

const Row = glamorous.div<{orientation: Orientation}>({
    display: 'flex',
    alignItems: 'flex-start'
    },
    (props) => ({
        flexDirection: 'row',
        flexWrap: props.orientation === 'vertical' ? 'nowrap' : 'wrap',
        marginBottom: props.orientation === 'vertical' ? '0.5em' : '0',
        marginLeft: props.orientation === 'horizontal' ? '0.5em' : '0'
    })
);

export default (props: Props) =>
    (<Div
        display="flex"
        flexFlow={props.orientation === 'vertical' ? 'column' : 'row'}
        flexWrap={props.orientation === 'vertical' ? 'nowrap' : 'wrap'}
        alignItems="flex-start"
    >
        {props.data.map(row => (
            <Row orientation={props.orientation} key={row.value}>
                <Div backgroundColor={row.color} width="1em" height="1em" />
                <Div marginLeft={'1em'} textAlign={'left'} >{row.value}</Div>
            </Row>
        ))}
    </Div>);
