import * as React from 'react';
import { P, Div, Em } from 'glamorous';
import {Document, Page, Header, TextBlock, Note, colors} from '@di-pdfs/pdf-base';

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
                <h2>Trends in development cooperation</h2>
                <Note>2006-2015, US$ millions, constant 2015 prices</Note>
            </TextBlock>
            <Div width="100%" height="150px" backgroundColor={colors.lightGrey}>
                <P color={colors.red}> Chart Place holder </P>
            </Div>
            <TextBlock>
                <h2>Trends by government department</h2>
                <Note>2011-2015, % of total expenditure</Note>
            </TextBlock>
            <Div width="100%" height="250px" backgroundColor={colors.lightGrey}>
                <P color={colors.red}> Chart Place holder <blockquote>It has a lgend</blockquote> </P>
            </Div>
            <TextBlock marginTop="1em">
                <h2>Top 10 recipients of technical cooperation, 2011-2013</h2>
                <Note>US$ millions Constant 2015 prices</Note>
            </TextBlock>
            <Div width="100%" height="230px" backgroundColor={colors.lightGrey}>
                <P color={colors.red}>Table Place holder </P>
            </Div>
            <TextBlock>
                <h2>African Renaissance and International Cooperation Fund, expenditure</h2>
            </TextBlock>
            <Div width="100%" height="230px" backgroundColor={colors.lightGrey}>
                <P color={colors.red}>PieChart Place holder </P>
            </Div>
            <TextBlock>
                   <h2>Breakdown by sector-type</h2>
                   <Note>2014 - 2016</Note>
            </TextBlock>
                <TextBlock>
                <h2>Expenditure by region></h2>
                <Note>2014 – 2016, US$ millions constant 2015 prices</Note>
            </TextBlock>
            <Div width="100%" height="230px" backgroundColor={colors.lightGrey}>
                <P color={colors.red}>Table Place holder </P>
            </Div>
        </Page>
    </Document>);
