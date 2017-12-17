import Document from './components/atoms/Document';
import FootNote from './components/atoms/FootNote';
import Header from './components/atoms/Header';
import Page from './components/atoms/Page';
import TextBlock from './components/atoms/TextBlock';
import Note from './components/atoms/Note';
import Legend from './components/atoms/Legend';
import * as colors from './theme/colors';
import Histogram from './components/molecules/Histogram';
import StackedBar from './components/molecules/StackedBar';

const charts = {Histogram, StackedBar};

export {
    Document,
    FootNote,
    Header,
    Page,
    Note,
    TextBlock,
    Legend,
    colors,
    charts
};
