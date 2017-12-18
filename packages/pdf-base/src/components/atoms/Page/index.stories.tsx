import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../Header';
import Document from '../Document';
import TextBlock from '../TextBlock';
import Page from '.';

storiesOf('Page', module).add('Basic Page', () =>
  (<Document>
      <Page footNote="multilaterals">
        <Header title="World Bank Group"/>
        <TextBlock><p>hello page 1</p></TextBlock>
      </Page>
      <Page footNote="multilaterals">
        <Header title="World Bank Group"/>
        <p> hello page 2</p>
      </Page>
    </Document>
  ));
