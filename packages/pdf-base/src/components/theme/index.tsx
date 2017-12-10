import glamorous, { GlamorousComponentFactory} from 'glamorous';

type Size = 'A4' | 'A3' | 'A2';

interface Props {
  size?: Size;
}

const Theme = glamorous.div<Props>({
    '& @page': {
        size: 'A4',
        margin: '70pt 60pt 70pt',
        background: 'red',
        fontSize: '5pt'
    }
});

export default Theme;
