import * as React from 'react';
import { P, Div, Em } from 'glamorous';
import {Document, Page, Header, TextBlock, Note, colors} from '@di-pdfs/pdf-base';

export default () =>
    (<Document>
        <Page footNote="Brazil">
            <Header title="Brazil as a provider of development cooperation"/>
            <TextBlock>
                <p>
                    Brazil is one of the five key developing country partners to the OECD.
                    The latest estimates available estimate that Brazil gave US$ 238 million in 2013.
                    This is based on a proxied definition to ODA. Brazil’s development cooperation activities include:
                    technical assistance provided through the Brazilian co-operation Agency (ABC),
                    humanitarian assistance, scientific and technological cooperation, scholarships,
                    imputed student costs and refugee costs.
                </p>
            </TextBlock>
            <TextBlock>
                <p>
                However, Brazil doesn’t only provide assistance bilaterally,
                but also channels their assistance through several multilateral organisations.
                According to the 2013 Brazilian Cooperation for International
                Development Report Brazil engages with a range of UN agencies,
                the World Bank, the New Development Bank, Pan American Health Organisation (PAHO)
                and many other international organisations, which may not be captured by the OECD,
                as they are not considered ODA eligible. They also engage in triangular cooperation
                with other key OECD partners – this includes the Brazil - South Africa- India Facility
                for poverty and Hunger (IBSA).
                </p>
            </TextBlock>
            <TextBlock>
                <h2>Overall Expenditure, 2011 – 2013</h2>
                <Note>2011 - 2013, US$ millions, constant 2015 prices</Note>
            </TextBlock>
            <Div width="100%" height="150px" backgroundColor={colors.lightGrey}>
                <P color={colors.red}> Chart Place holder </P>
            </Div>
            <TextBlock>
                    <Em>Source: Organisation for Economic Co-operation and Development</Em>
                </TextBlock>
            <TextBlock>
                <h2>Technical cooerpation by region, 2011 - 2013</h2>
            </TextBlock>
            <Div width="100%" height="250px" backgroundColor={colors.lightGrey}>
                <P color={colors.red}> Chart Place holder </P>
            </Div>
            <TextBlock marginTop="1em">
                <h2>Top 10 recipients of technical cooperation, 2011-2013</h2>
                <Note>US$ millions Constant 2015 prices</Note>
            </TextBlock>
            <Div width="100%" height="230px" backgroundColor={colors.lightGrey}>
                <P color={colors.red}>Table Place holder </P>
            </Div>
        </Page>
    </Document>);
