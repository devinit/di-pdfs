import * as React from 'react';
import { P, Div } from 'glamorous';
import {Document, Page, Header, TextBlock, Note, colors} from '@di-pdfs/pdf-base';

export default () => (
    <Document>
    <Page footNote="India">
        <Header title="India as a provider of development cooperation  "/>
        <TextBlock>
            <p>
            We estimate development cooperation from India stood at US$1.5 billion
            in 2015, levels had broadly increased over the last 6 years.
            Technical and economic cooperation is the largest component of development cooperation from India.
            The majority of country allocable technical and economic cooperation and loans and advances which India
            provides goes to neighbouring countries. India increased volumes of expenditure through
            international organisations in 2015 with levels reaching US$256 million, this rise was
            driven in-part by a contribution to the New Development Bank.
            India considers government-supported concessional lines of credit as part of its development cooperation.
            They support Indian exports and productive investments in developing countries.
            The data in this profile captures interest subsidies for lines
            of credit, however does not show lines of credit expenditure. 
            </p>
        </TextBlock>
        <TextBlock>
            <h2>Overall Expenditure</h2>
            <Note>2008-2015, constant 2015 prices, US$ billions</Note>
        </TextBlock>
        <Div width="100%" height="250px" backgroundColor={colors.lightGrey}>
            <P color={colors.red}> Histogram Place holder </P>
        </Div>
        <TextBlock>
            <h2>Technical and economic cooperation and loans and advances by recipient country</h2>
            <Note>2015, US$ millions, constant 2015 prices</Note>
        </TextBlock>
        <Div width="100%" height="250px" backgroundColor={colors.lightGrey}>
            <P color={colors.red}> Table Place holder </P>
        </Div>
        <TextBlock>
            <h2>Contributions to international organisations</h2>
            <Note>2008-2015, constant 2015 prices, US$ millions.</Note>
        </TextBlock>
        <Div width="100%" height="230px" backgroundColor={colors.lightGrey}>
            <P color={colors.red}>Component Histogram Place holder </P>
        </Div>
        <TextBlock>
                <Note>
                    Note: data is sourced and compiled from
                    the Union Budget of India. Data is
                    converted from fiscal year to calendar year and exchanged
                    from Indian Rupee to US$ using
                    IMF exchange rates and deflated to constant 2015 prices
                    using IMF deflators.
                    </Note>
            </TextBlock>
    </Page>
</Document>
);
