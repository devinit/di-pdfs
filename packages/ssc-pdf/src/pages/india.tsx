import * as React from 'react';
import {Document, Page, Header, TextBlock, Note} from '@devinit/pdf-base';
import StackedBar from '../components/india/StackedBar';
import Table from '../components/india/Table';

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
            <h2>Trends in development cooperation, 2008-2015</h2>
            <Note>constant 2015 prices, US$ billions</Note>
        </TextBlock>
        <StackedBar dataKey="dvptCooperation" groupBy="id" />
        <TextBlock>
            <h2>Technical and economic cooperation and loans and advances by recipient country, 2015</h2>
            <Note>Constant 2015 prices, US$ millions</Note>
        </TextBlock>
        <Table />
        <TextBlock marginTop="20px">
            <h2>Contributions to international organisations, 2011-2015</h2>
            <Note>Constant 2015 prices, US$ millions.</Note>
        </TextBlock>
        <StackedBar dataKey="multiCooperation" groupBy="multilateral" />
        <TextBlock>
                <p>
                    Note: data is sourced and compiled from
                    the Union Budget of India. Data is
                    converted from fiscal year to calendar year and exchanged
                    from Indian Rupee to US$ using
                    IMF exchange rates and deflated to constant 2015 prices
                    using IMF deflators.
                    </p>
            </TextBlock>
        </Page>
</Document>
);
