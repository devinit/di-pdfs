import * as React from 'react';
import glamorous, {Tbody, Th, Tr, Td} from 'glamorous';
import {red, lightGrey} from '../../../theme/colors';
import * as R from 'ramda';

interface Props {
    headings: string[];
    data: object[];
}

const tableBorderStyle = `1px solid ${lightGrey}`;

const StyledTable = glamorous.table({
    '& th, td, tboday' : {
        borderTop: tableBorderStyle,
        borderLeft: tableBorderStyle,
        borderRight: tableBorderStyle,
        borderBottom: `1px solid ${red}`,
        borderCollapse: 'collapse',
    },
    '& th' : {
        borderBottom: `4px solid ${red}`,
    },

});

export default (props: Props) =>
    (<StyledTable>
        <Tbody>
            {props.headings.map(heading => (<Th color={'red'} key={heading}>{heading}</Th>))}
            {props.data.map((row, index) => (
                <Tr key={index}>
                    {Object.keys(row).map(key => (<Td Key={key}> {row[key]} </Td>))}
                </Tr>
                ))
            }
        </Tbody>
    </StyledTable>);
