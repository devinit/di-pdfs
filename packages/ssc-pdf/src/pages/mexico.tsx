import * as React from 'react';
import { P, Div, Em } from 'glamorous';
import {Document, Page, Header, TextBlock, Note, colors} from '@di-pdfs/pdf-base';

export default () => (
    <Document>
    <Page footNote="Mexico">
        <Header title="Mexico as a provider of development cooperation "/>
        <TextBlock>
            <p>
            The latest estimates available on Mexico’s contribution to International Development is provided by the OECD, which estimates that Mexico gave US$ 134 million in 2014. This is based on a proxied definition of ODA. Development cooperation activities focus on several key areas, such as, environmental protection, statistics, health, science and technology and education. The Ministry of Finance funds these activities, which are coordinated by the Mexican Agency of international Development Cooperation (AMEXCID) and then implemented by public institutions. 

Mexico engages in both bilateral and triangular corporation. Bilateral assistance is mainly delivered through the regional programme ‘Meso American integration and Development Project’. This has a broad sectoral focus ranging from health to technology. Its triangular cooperation consists of partnering with DAC members, such as Japan and Germany and channelling assistance through several multilateral organisations. In 2015, 60% of assistance channelled through multilaterals went through the United Nations and 30% went through the Inter – American Development Bank. 
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
</Document>
);
