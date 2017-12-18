import * as React from 'react';
import { P, Div } from 'glamorous';
import {Document, Page, Header, TextBlock, Note, colors} from '@di-pdfs/pdf-base';

export default () =>
    (<Document>
        <Page footNote="China">
            <Header title="China as a provider of development cooperation "/>
            <TextBlock>
                <p>
                China does not provide detailed information on its
                development cooperation activities at the official level.
                However, analysis conducted by the Japan International Cooperation Agency (JICA)
                estimates that China disbursed US$ 6.1 billion in 2015,
                this estimate may be used as a proxy for flows which would meet the criteria
                of Official Development Assistance (ODA), however data for concessional loans for this year needs
                to be treated with some caution as disbursements were not disclosed for this year.
                China provided just over half of its concessional development cooperation over the last 10 years
                in the form of grants and interest-free loans, levels peaked in 2012 at US$3 billion,
                whilst 42% of development cooperationover the same time period was in the form of concessional loans.
                Expenditure to multilateral international organisations made up 8% of total. China provides flows to
                developing countries which do not meet the criteria for counting as ODA, such as
                preferential export buyer credits, levels of which stood at US$7.3 billion in 2015.
                </p>
            </TextBlock>
            <TextBlock>
                <h2>Overall Gross Expenditure of concessional development cooperation</h2>
                <Note>2011 - 2013, US$ millions, constant 2015 prices</Note>
            </TextBlock>
            <Div width="100%" height="150px" backgroundColor={colors.lightGrey}>
                <P color={colors.red}> Chart Place holder </P>
            </Div>
            <TextBlock>
                    <p>Source: Kitano, N. 2017.
                        A Note on Estimating China’s Foreign Aid Using New Data:2015 Preliminary Figures.
                        JICA Research Institute</p>
                </TextBlock>
            <TextBlock>
                <h2>Multilateral expenditure</h2>
                <Note>2006-2015, US$ billions, constant 2015</Note>
            </TextBlock>
            <Div width="100%" height="250px" backgroundColor={colors.lightGrey}>
                <P color={colors.red}> Chart Place holder </P>
            </Div>
            <TextBlock>
                    <p>Source: Kitano, N. 2017.
                        A Note on Estimating China’s Foreign Aid Using New Data:2015 Preliminary Figures.
                        JICA Research Institute</p>
                </TextBlock>
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
        </Page>
        <Page footNote="China">
            <TextBlock>
            <h2>Regional distribution of ODA-like flows</h2>
            <Note>2012-2014, commitments</Note>
            </TextBlock>
            <TextBlock>
                <h2>ODA-like flows broken down by sector</h2>
                <Note>2012 – 2014, commitments</Note>
            </TextBlock>
            <Div width="100%" height="230px" backgroundColor={colors.lightGrey}>
                <P color={colors.red}>Pie Chart Place holder </P>
            </Div>
            <TextBlock>
                    <p>Source: AidData. 2017. Global Chinese Official Finance Dataset, Version 1.0.
                        Retrieved from http://aiddata.org/data/chinese-global-official-finance-dataset</p>
                </TextBlock>
            <TextBlock>
                <h2>Recipients of ODA-like flows</h2>
                <Note>2012-2014, commitments</Note>
            </TextBlock>
            <Div width="100%" height="230px" backgroundColor={colors.lightGrey}>
                <P color={colors.red}>Chart Place holder </P>
            </Div>
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
