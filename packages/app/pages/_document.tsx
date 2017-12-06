import Document, { Head, Main, NextScript } from 'next/document';
import * as React from 'react';
import { renderStatic } from 'glamor/server';

const {version} = require('../package.json');

export default class extends Document {
  public static async getInitialProps({ renderPage, query, pathname }) {
    const page = renderPage();
    const styles = renderStatic(() => page.html);
    return { ...page, ...styles, query, pathname };
  }

  constructor(props: any) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids;
    }
  }
  public render() {
    return (
      <html lang="en">
        <Head>
          <meta name="theme-color" content="#e8443a" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href={`/semantic/semantic.min.css?v=${version}`} />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
