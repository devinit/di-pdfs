import * as React from 'react';
import glamorous, {Div} from 'glamorous';

interface Props {
    children: React.ReactChild[];
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
        </Div>
    </PageContainer>);
