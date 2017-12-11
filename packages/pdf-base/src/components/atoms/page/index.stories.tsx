import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../Header';
import Document from '../Document';
import FootNote from '../FootNote';
import Page from '.';

storiesOf('Page', module).add('Basic Page', () =>
  (<Document>
      <Page>
        <Header title="World Bank Group"/>
        <FootNote text="Multilateral Profiles" />
      </Page>
      <Page>
        <Header title="World Bank Group"/>
        <FootNote text="Multilateral Profiles" />
      </Page>
    </Document>
  ));
