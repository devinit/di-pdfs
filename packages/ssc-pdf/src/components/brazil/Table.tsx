import * as React from 'react';
import {Div} from 'glamorous';
import {Table} from '@devinit/pdf-base';
import {splitAt} from 'ramda';
import data from './data';

export default () => {
    const mid: number = data.topTchRecipients.length / 2;
    const splitData = splitAt(mid, data.topTchRecipients);
    const headings = ['Recipient country', 'Development Cooperation'];
    return (
        <Div
            paddingLeft="10px"
            width="100%"
            display="flex"
            justifyContent="space-between"
        >
            <Div width="50%" key="stacked">
                <Table data={splitData[0]}  headings={headings}/>
            </Div>
            <Div width="50%" key="legend-stacked">
                <Table data={splitData[1]} headings={headings}/>
            </Div>
        </Div>
    );
};
