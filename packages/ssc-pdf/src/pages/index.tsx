import * as React from 'react';
import { P } from 'glamorous';
import {Document, Page, Header} from '@di-pdfs/pdf-base';

export default () =>
    (<Document>
        <Page footNote="multilaterals">
            <Header title="World Bank Group"/>
            <P marginBottom="10px" textAlign="center">Hello World, page 1</P>
        </Page>
        <Page footNote="multilaterals">
            <Header title="World Bank Group"/>
            <P marginBottom="10px" textAlign="center">Hello World, page 2 </P>
        </Page>
    </Document>);
