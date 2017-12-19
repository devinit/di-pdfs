import {color} from '../../atoms/Chart/configs';

export default {
    type: 'treemap',
    tree: {
        id: 'name',
        value: 'value'
      },
    ...color,
    labeling: {
      autofit: true,
    },
    treemap: {
      tile: 'squarify'
    }
};
