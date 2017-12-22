import { configure } from '@storybook/react';
import '@di-pdfs/pdf-base/lib/static/styles.min.css';
import '@di-pdfs/pdf-base/lib/static/di-charts.min.css';

const req = require.context('../src/components', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
