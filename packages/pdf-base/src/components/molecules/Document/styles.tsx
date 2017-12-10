import glamorous, { GlamorousComponentFactory} from 'glamorous';

type Size = 'A4' | 'A3' | 'A2';

interface Props {
  size?: Size;
}

const Document = glamorous.body<Props>({
    '@media only screen and (max-width: 700px)': {
        
    }
    },
    (props) => ({
    })
);
