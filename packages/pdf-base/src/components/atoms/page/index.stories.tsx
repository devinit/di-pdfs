import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../Header';
import Document from '../Document';
import FootNote from '../FootNote';
import Page from '.';

storiesOf('Page', module).add('Basic Page', () =>
  (<Document>
      <Page footNote="multilaterals">
        <Header title="World Bank Group"/>
        <p> hello page 1</p>
      </Page>
      <Page footNote="multilaterals">
        <Header title="World Bank Group"/>
        <p> hello page 2</p>
      </Page>
    </Document>
  ));
