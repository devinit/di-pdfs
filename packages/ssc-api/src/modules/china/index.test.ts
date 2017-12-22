import {China} from '.';
import {prettyLists} from '@di-pdfs/api-base/lib/utils/test.utils';
import db from '@di-pdfs/api-base/lib/db';

describe('China', () => {
    const china = new China(db);
    it('getting multiCooperation', async () => {
        const data = await china.odaLikeFlowsByRegion();
        expect(prettyLists(data)).toMatchSnapshot();
     }, 100000);
    it('getting tch top recipients', async () => {
        const data = await china.odaLikeFlowsBySector();
        expect(prettyLists(data)).toMatchSnapshot();
     }, 100000);
    it('getting tch top recipients', async () => {
        const data = await china.odaRecipients();
        expect(prettyLists(data)).toMatchSnapshot();
     }, 100000);
    it('getting tch top recipients', async () => {
        const data = await china.overallMultiExpenditure();
        expect(prettyLists(data)).toMatchSnapshot();
     }, 100000);
    afterAll(() => {
       db.$config.pgp.end();
    });
});
