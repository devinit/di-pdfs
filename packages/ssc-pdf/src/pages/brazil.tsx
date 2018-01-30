import * as React from 'react';
import { Em } from 'glamorous';
import StackedBar from '../components/brazil/StackedBar';
import Table from '../components/brazil/Table';
import {Document, Page, Header, TextBlock, Note} from '@devinit/pdf-base';

export default () =>
    (<Document>
        <Page footNote="Brazil">
            <Header title="Brazil as a provider of development cooperation"/>
            <TextBlock>
                <p>
                Brazil provides many different modalities of development cooperation, including
                technical cooperation (the transfer and sharing of knowledge and experiences),
                educational cooperation (predominantly granting scholarships and opportunities to
                foreign students in Brazilian educational institutions),
                scientific and technological cooperation (including agricultural and space research),
                humanitarian cooperation, refugee support and protection, peacekeeping operations
                and contributions made to international organisations (including a range of UN agencies,
                the World Bank, the New Development Bank and the Pan American Health Organisation).
                The most recent available figures on Brazil’s development cooperation are for 2013,
                the estimate is provided by the Institute for Applied Economic Research (IPEA) and
                Brazilian Cooperation Agency (ABC) and totals US$397 million in 2013 (US$299 million in
                constant 2015 prices), representing a fall from 2011.
                An estimate of Brazil’s development cooperation which meets the definitional criteria
                for Official Development Assistance (ODA), is provided by the Organisation of Economic Co-operation
                and Development, and stands at US$238 million in 2013.
                The OECD estimate removes peacekeeping expenditures and cooperation to non-ODA eligible countries
                and multilateral organisations
                which do not work exclusively on developmental activities in developing countries.
                </p>
            </TextBlock>
            <TextBlock>
                <h2>Development cooperation, 2011 – 2013</h2>
                <Note>US$ millions, constant 2015 prices</Note>
            </TextBlock>
            <StackedBar dataKey="dvptCooperation" groupBy="id" />
            <TextBlock>
                    <Em>Source: Brazilian cooperation for international development:
                        2011-2013. Brasília. IPEA. ABC, 2017 and Organisation for Economic Co-operatio
                        and Development</Em>
                </TextBlock>
            <TextBlock>
                <h2>Technical cooperation by region, 2011 - 2013</h2>
                <Note>Percent</Note>
            </TextBlock>
            <StackedBar dataKey="tchCooperationByRegion" groupBy="region" />
            <TextBlock marginTop="1em">
                <h2>Top 10 recipients of technical cooperation, 2011-2013</h2>
                <Note>US$ millions Constant 2015 prices</Note>
            </TextBlock>
            <Table />
            <TextBlock>
                    <Em>
                        Source:Brazilian cooperation for international development: 2011-2013. Brasília.
                         IPEA. ABC, 2017
                    </Em>
            </TextBlock>
            </Page>
    </Document>);
