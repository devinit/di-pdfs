import glamorous from 'glamorous';
import {colorMap} from '../../../util';

export interface Props {
   color?: 'red' | 'black';
}

const Note: any = glamorous.span<Props>({
    fontSize: '10px',
    marginTop: '20px',
    padding: '0px'
}, (props) => ({
    color: props.color ? colorMap[props.color] : colorMap.black
}));

export default Note;
