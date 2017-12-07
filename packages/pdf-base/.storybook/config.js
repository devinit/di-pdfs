import { configure } from '@storybook/react';
import '../static/semantic/semantic.min.css';

const req = require.context('../src/components', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
