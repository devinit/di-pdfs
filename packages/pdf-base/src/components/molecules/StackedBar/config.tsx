import {red, blue, purple} from '../../../theme/colors';
export default {
  type: 'stacked-bar',
  colors: [red, purple, blue],
  coloring: 'color',
  linearAxis: {
    showAxis: true,
    showGridlines: true,
  },
  categoryAxis: {
    showAxis: true,
    innerPadding: 0.1,
    outerPadding: 0
  }
};
