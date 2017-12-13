import { configure } from '@storybook/react';
import '../static/styles.min.css';
import '../static/di-charts.min.css';

const req = require.context('../src/components', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
