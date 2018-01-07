import * as React from 'react';
import { Div } from 'glamorous';
import StackedBar from '../components/southAfrica/StackedBar';
import Bar from '../components/southAfrica/Bar';
import Pie from '../components/southAfrica/Pie';
import {Document, Page, Header, TextBlock, Note} from '@di-pdfs/pdf-base';

export default () =>
    (<Document>
        <Page footNote="SouthAfrica">
            <Header title="South Africa as a provider of development cooperation "/>
            <TextBlock>
                <p>
                We estimate South Africa’s development cooperation stood at US$293 million
                in 2015. Our data is based on Government of South Africa budget documents.
                Levels increased significantly between 2014 and 2015 (by 69%), with an increase
                in expenditure from the National Treasury sub-programme ‘International Development
                Funding Institutions’ responsible for much of this rise. Concessional development cooperation
                expenditure from the Department of International Relations and Cooperation (DIRCO), which coordinates,
                implements and manages South Africa’s international relations programmes, has fallen slightly over
                the last three years. DIRCO has significantly decreased recent funding levels to the
                African Renaissance and International Cooperation Fund, which is an instrument set-up to
                enhance cooperation between South Africa and other countries, with focus areas including
                humanitarian assistance, socio-economic development and integration
                and promotion and resolution of conflicts.
                </p>
            </TextBlock>
            <TextBlock>
                <p>
                Beyond the development cooperation in reference above, South Africa uses a number of other
                development finance tools as part of its international cooperation including: loans and equity
                through the Development Bank of Southern Africa (DBSA) and the
                Industrial Development Corporation (IDC) and
                peace and security expenditure, which are not captured in our estimates.
                </p>
            </TextBlock>
            <TextBlock>
                <h2>Trends in development cooperation, 2006-2015</h2>
                <Note>2006-2015, US$ millions, constant 2015 prices</Note>
            </TextBlock>
            <Bar />
            <TextBlock>
                <h2>Trends by government department, 2011-2015</h2>
                <Note>percentage of total expenditure</Note>
            </TextBlock>
            <StackedBar dataKey="govmtdepartment" groupBy="id" />
            <TextBlock>
                <h2>African Renaissance and International Cooperation Fund, expenditure</h2>
            </TextBlock>
            <Div display="flex">
                <TextBlock>
                    <h2>ARICF expenditure by region, 2014-2016</h2>
                    <Note>US$ millions constant 2015 prices</Note>
                </TextBlock>
                <TextBlock>
                    <h2>ARICF breakdownby sector-type, 2014-2016</h2>
                    <Note>Percentage</Note>
                </TextBlock>
            </Div>
            <Div display="flex">
                <StackedBar dataKey="aricfExpByRegion" groupBy="region" />
                <Pie />
            </Div>
        </Page>
    </Document>);
