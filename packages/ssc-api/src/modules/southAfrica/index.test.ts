import {prettyLists} from '@di-pdfs/api-base/lib/utils/test.utils';
import {SouthAfrica} from '.';
import db from '@di-pdfs/api-base/lib/db';

describe('SouthAfrica', () => {
    const southAfrica = new SouthAfrica(db);
    it('getting dvptCooperationTrend', async () => {
        const data = await southAfrica.dvptCooperationTrend();
        expect(prettyLists(data)).toMatchSnapshot();
     }, 100000);
    it('getting aricfExpByRegion', async () => {
        const data = await southAfrica.aricfExpByRegion();
        expect(prettyLists(data)).toMatchSnapshot();
     }, 100000);
    it('getting govmtdepartment', async () => {
        const data = await southAfrica.govmtdepartment();
        expect(prettyLists(data)).toMatchSnapshot();
     }, 100000);
    it('getting aricfExpBySector', async () => {
        const data = await southAfrica.aricfExpBySector();
        expect(prettyLists(data)).toMatchSnapshot();
     }, 100000);
    afterAll(() => {
       db.$config.pgp.end();
    });
});
