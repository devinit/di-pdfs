/**
 * base configs
 */
import {red, blue, purple, orange} from '../../../theme/colors';

export const color = {
  colors: [red, purple, blue, orange],
  coloring: 'color',
};

export const base = {
  ...color,
  labeling: {
    showLabels: true
  },
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
