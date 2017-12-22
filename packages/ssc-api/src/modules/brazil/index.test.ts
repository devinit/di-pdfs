import {prettyLists} from '@di-pdfs/api-base/lib/utils/test.utils';
import {Brazil} from '.';
import db from '@di-pdfs/api-base/lib/db';

describe('Brazil', () => {
    const brazil = new Brazil(db);
    it('getting dvptCooperation', async () => {
       const data = await brazil.dvptCooperation();
       expect(prettyLists(data)).toMatchSnapshot();
    }, 100000);
    it('getting tch cooperation', async () => {
        const data = await brazil.tchCooperationByRegion();
        expect(prettyLists(data)).toMatchSnapshot();
     }, 100000);
    it('getting tch top recipients', async () => {
        const data = await brazil.topTchRecipients();
        expect(prettyLists(data)).toMatchSnapshot();
     }, 100000);
    afterAll(() => {
       db.$config.pgp.end();
    });
});
