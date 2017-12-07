import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { renderStatic } from 'glamor/server';

const stylesheet = require<any>('@di-pdfs/pdf-base/dist/static/semantic.min.css');

export default class MyDocument extends Document {
  public static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = renderStatic(() => page.html);
    return { ...page, ...styles };
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids;
    }
  }

  public render() {
    return (
      <html>
        <Head>
          <title>South South coperation PDFs</title>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
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
