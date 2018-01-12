import * as React from 'react';
import {Document, Page, Header, TextBlock, colors} from '@devinit/pdf-base';

export default () => (
    <Document>
    <Page footNote="Home">
        <Header title="South South Co-operation PDFS"/>
        <div style={{marginTop: '2em' }}>
            <TextBlock>
                <h3> PDF Profiles</h3>
            </TextBlock>
        </div>
        <div style={{marginLeft: '2em' }}>
            <TextBlock>
                <h3><a href="/china" target="_blank" style={{color: colors.red}}>China</a></h3>
            </TextBlock>
            <TextBlock>
                <h3><a href="/india" target="_blank" style={{color: colors.red}}>India</a></h3>
            </TextBlock>
            <TextBlock>
                <h3><a href="/south-africa" target="_blank" style={{color: colors.red}}>South Afica</a></h3>
            </TextBlock>
            <TextBlock>
                <h3><a href="/brazil" target="_blank" style={{color: colors.red}}>Brazil</a></h3>
            </TextBlock>
        </div>
    </Page>
</Document>
);
