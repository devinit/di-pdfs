import { configure } from '@storybook/react';
import '../static/semantic/semantic.min.css';

const req = require.context('../components', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const mockedRouter = {
  prefetch: () => {},
};

Router.router = mockedRouter;

configure(loadStories, module);
