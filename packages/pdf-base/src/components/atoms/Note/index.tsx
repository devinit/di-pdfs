import glamorous from 'glamorous';
import {colorMap} from '../../../util';

interface Props {
   color?: 'red' | 'black';
}

export default glamorous.span<Props>({
    fontSize: '10px',
    marginTop: '20px',
    padding: '0px'
}, (props) => ({
    color: props.color ? colorMap[props.color] : colorMap.black
}));
