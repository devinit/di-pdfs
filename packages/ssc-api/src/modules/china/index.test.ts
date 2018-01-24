import {China} from '.';
import {prettyLists} from '@devinit/graphql-next/lib/utils/test.utils';
import db from '@devinit/graphql-next/lib/db';

describe('China', () => {
    const china = new China(db);
    it('getting odaLikeFlowsByRegion', async () => {
        const data = await china.flowsByRegion();
        expect(prettyLists(data)).toMatchSnapshot();
     }, 100000);
    it('getting odaLikeFlowsBySector', async () => {
        const data = await china.flowsBySector();
        expect(prettyLists(data)).toMatchSnapshot();
     }, 100000);
    it('getting odaRecipients', async () => {
        const data = await china.odaRecipients();
        expect(prettyLists(data)).toMatchSnapshot();
     }, 100000);
    it('getting overallMultiExpenditure', async () => {
        const data = await china.overallMultiExpenditure();
        expect(prettyLists(data)).toMatchSnapshot();
     }, 100000);
    afterAll(() => {
       db.$config.pgp.end();
    });
});
