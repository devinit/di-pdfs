import {red} from '../../../theme/colors';
export default {
    type: 'bar',
    colors: [red],
    coloring: 'color',
    labeling: {
      showLabels: true,
      showValues: true
    },
    linearAxis: {
      showAxis: true,
      showGridlines: true,
    },
    categoryAxis: {
      showAxis: true,
      innerPadding: 0.3,
      outerPadding: 0
    }
};
