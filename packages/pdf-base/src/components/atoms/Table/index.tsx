import * as React from 'react';
import glamorous, {Tbody, Th, Tr, Td} from 'glamorous';
import * as R from 'ramda';

interface Row {
    cells: any;
}

interface Props {
    headings: string[];
    data: any;
}
const myStyles = {
    border: '1px solid black',
    borderCollapse: 'collapse',
    color: 'this.props.color'
};
const Head = (props) => props.headings.map( (heading, index) => {
   return (
   <Th style={myStyles} color={'red'} key={index}>{heading}</Th>
   );
});
const Row1 = (props) => props.cells.map( (cell, index) => {
    return (
    <Tr key={index} style={{}}>
            <Td style={myStyles} key={index + cell.ctry}>{cell.ctry}</Td>
            <Td style={myStyles} key={index + cell.dev}>{cell.dev}</Td>
    </Tr>
    );
});

export default (props: Props) =>
(<Tbody style={myStyles}>

  <Head headings={props.headings}/>
   <Row1 cells={props.data}/>
</Tbody>);
