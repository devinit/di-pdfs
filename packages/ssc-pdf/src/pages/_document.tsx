import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { renderStatic } from 'glamor/server';

export default class MyDocument extends Document {
  public static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = renderStatic(() => page.html);
    return { ...page, ...styles };
  }
  public stylesOverride: string;
  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids;
    }
    this.stylesOverride = `.plottable .dark-label text {fill: white}`;
  }

  public render() {
    return (
      <html>
        <Head>
          <title>South South coperation PDFs</title>
          <link rel="stylesheet" href={`/static/styles.min.css`} />
          <link rel="stylesheet" href={`/static/di-charts.min.css`} />
          <style dangerouslySetInnerHTML={{ __html: this.stylesOverride }} />
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
