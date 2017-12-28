import * as React from 'react';
import glamorous, {Div} from 'glamorous';
import FootNote from '../FootNote';

export interface Props {
    children: React.ReactChild[] | React.ReactChild;
    footNote: string;
}

const PageContainer = glamorous.section({
    'display': 'flex',
    'flexDirection': 'column',
    'height': '295mm',
    'boxShadow': '0 0 3px 3px #ccc',
    'overflow': 'hidden',
    'position': 'relative',
    'marginBottom': '10px',
    'pageBreakInside': 'avoid',
    '@media only print': {
        marginBottom: '0px',
        boxShadow: 'none',
    }
});

export default (props: Props) =>
    (<PageContainer>
        <Div padding="10mm">
            {props.children}
            <FootNote text={props.footNote} />
        </Div>
    </PageContainer>);
