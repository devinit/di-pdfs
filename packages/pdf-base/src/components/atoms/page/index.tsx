import * as React from 'react';
import glamorous, {Div} from 'glamorous';

interface Props {
    children: React.ReactChild[];
}

const PageContainer = glamorous.section({
    'display': 'flex',
    'padding': '10mm',
    'flexDirection': 'column',
    'height': '297mm',
    'boxShadow': '0 0 3px 3px #ccc',
    'overflow': 'hidden',
    'position': 'relative',
    'pageBreakAfter': 'always',
    'marginBottom': '10px',
    ':last': {
        pageBreakAfter: 'avoid'
    }
});

export default (props: Props) =>
    (<PageContainer>
        {props.children}
    </PageContainer>);
