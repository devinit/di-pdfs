import * as React from 'react';
import { Div } from 'glamorous';
import {Document, Page, Header, TextBlock, Note} from '@di-pdfs/pdf-base';
import Pie from '../components/china/Pie';
import StackedBar from '../components/china/StackedBar';
import Bar from '../components/china/Bar';
import Treemap from '../components/china/Treemap';

export default () =>
    (<Document>
        <Page footNote="China">
            <Header title="China as a provider of development cooperation "/>
            <TextBlock>
                <p>
                China last provided detailed information on its development cooperation
                activities at the official level in 2014 in a White Paper on foreign aid,
                the White Paper stated that China’s foreign assistance was provided
                in three types: grants, interest free loans and concessional loans.
                The paper provided data on foreign aid from 2010 to 2012,
                with 2012 as the most recent year of data available.
                However, analysis conducted by the Japan International Cooperation Agency (JICA)
                estimates that China’s gross concessional
                development cooperation stood at US$6.1 billion in 2015;
                the estimate may be used as a proxy for flows
                which would meet the criteria for being Official Development Assistance (ODA) eligible.
                According to this analysis, China provided just over half of its concessional
                development cooperation over the last 10 years in the form of grants and interest-free loans,
                where levels peaked in 2012 at US$3 billion, whilst 42% of development cooperation
                over the same time period was in the form of concessional loans.
                Expenditure to multilateral international organisations made up 8% of the total.
                Furthermore, China also provides significant flows to developing countries which
                would not meet the criteria for counting as ODA,
                such as preferential export buyer credits, levels of which have grown year-on-year
                since 2009 and were estimated to stand at US$7.3 billion in 2015.
                </p>
            </TextBlock>
            <TextBlock>
                <h2>Gross Expenditure of concessional development cooperation, 2006-2015</h2>
                <Note>US$ billions, constant 2015 prices</Note>
            </TextBlock>
            <StackedBar />
            <TextBlock>
                    <p>Source: Kitano, N. 2017.
                        A Note on Estimating China’s Foreign Aid Using New Data:2015 Preliminary Figures.
                        JICA Research Institute</p>
                </TextBlock>
            <TextBlock>
                <h2>Multilateral expenditure</h2>
                <Note>2006-2015, US$ billions, constant 2015</Note>
            </TextBlock>
            <Bar />
            <TextBlock>
                    <p>Source: Kitano, N. 2017.
                        A Note on Estimating China’s Foreign Aid Using New Data:2015 Preliminary Figures.
                        JICA Research Institute</p>
                </TextBlock>
        </Page>
        <Page footNote="China">
        <TextBlock>
                <p>
                The data presented on this page is sourced from Aiddata’s official financing
                from China dataset. The data shown in the charts below are estimates of ODA-like commitments.
                Aiddata use an open-source data collection methodology to collect project-level data from
                providers of official finance who do not participate in global aid reporting systems
                The data shows between 2012 and 2014 that two-thirds of China’s ODA-like commitments went to Africa,
                the top three recipients over this period were Cote d’lvoire,
                Tanzania and Nigeria . 19% went to Asia – where
                the top three recipients were Kyrgyzstan, Sri Lanka and Cambodia.
                6% went to the Americas. Close to half (46%) of ODA-like commitments over 2012-2014
                were categorised as being under the transport and storage sector, whilst 12% of commitments were
                categorised under the energy generation and supply sector.
                </p>
                </TextBlock>
            <Div display="flex" marginTop="10px">
            <TextBlock>
            <h2>Regional distribution of ODA-like flows</h2>
            <Note>2012-2014, commitments</Note>
            </TextBlock>
            <TextBlock>
                <h2>ODA-like flows broken down by sector</h2>
                <Note>2012 – 2014, commitments</Note>
            </TextBlock>
            </Div>
            <Pie />
            <TextBlock>
                    <p>Source: AidData. 2017. Global Chinese Official Finance Dataset, Version 1.0.
                        Retrieved from http://aiddata.org/data/chinese-global-official-finance-dataset</p>
                </TextBlock>
            <TextBlock>
                <h2>Recipients of ODA-like flows</h2>
                <Note>2012-2014, commitments</Note>
            </TextBlock>
           <Treemap />
            <TextBlock>
                    <p>Source: AidData. 2017. Global Chinese Official Finance Dataset, Version 1.0.
                        Retrieved from http://aiddata.org/data/chinese-global-official-finance-dataset</p>
                </TextBlock>
            <TextBlock>
                <p>
                Data sourced from Aiddata Chinese Official Finance dataset shown in this profile only includes
                records that have been recommended for research. Data shown are commitments for projects holding
                a status of ‘completion’,‘implementation’, or ‘pipeline: commitment’.
                </p>
                </TextBlock>
        </Page>
    </Document>);
