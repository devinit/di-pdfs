import * as React from 'react';
import glamorous, {Tbody, Th, Tr, Td} from 'glamorous';
import {red, lightGrey} from '../../../theme/colors';
interface Props {
    headings: string[];
    data: object[];
}

const tableBorderStyle = `1px solid ${lightGrey}`;

const StyledTable = glamorous.table({
    '& td, tboday' : {
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
        <Tr>
        {props.headings.map(heading => (<Th color={'red'} key={heading}>{heading}</Th>))}
        </Tr>
        {props.data.map((row, index) => (
            <Tr key={`${JSON.stringify(row)}`}>
                {Object.keys(row).map(key => (<Td key={key}> {row[key]} </Td>))}
            </Tr>
            ))
        }
        </Tbody>
    </StyledTable>);
