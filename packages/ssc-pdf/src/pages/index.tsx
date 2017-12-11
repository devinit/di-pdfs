import * as React from 'react';
import { P } from 'glamorous';
import {Document, Page, Header, FootNote} from '@di-pdfs/pdf-base';

export default () =>
    (<Document>
        <Page>
            <Header title="World Bank Group"/>
            <P marginBottom="10px" textAlign="center">Hello World, page 1</P>
            <FootNote text="Multilateral Profiles" />
        </Page>
        <Page>
            <Header title="World Bank Group"/>
            <P marginBottom="10px" textAlign="center">Hello World, page 2 </P>
            <FootNote text="Multilateral Profiles" />
        </Page>
    </Document>);
