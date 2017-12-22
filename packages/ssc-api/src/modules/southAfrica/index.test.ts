import * as prettyFormat from 'pretty-format';
import {SouthAfrica} from '.';
import db from '@di-pdfs/api-base/lib/db';

describe('SouthAfrica', () => {
    const southAfrica = new SouthAfrica(db);
    it('getting dvptCooperation', async () => {
       const data = await southAfrica.dvptCooperationTrend();
       expect(prettyFormat(data)).toMatchSnapshot();
    }, 100000);
    it('getting aricfExpByRegion', async () => {
        const data = await southAfrica.aricfExpByRegion();
        expect(prettyFormat(data)).toMatchSnapshot();
     }, 100000);
    it('getting govmtdepartment', async () => {
        const data = await southAfrica.govmtdepartment();
        expect(prettyFormat(data)).toMatchSnapshot();
     }, 100000);
    it('getting aricfExpBySector', async () => {
        const data = await southAfrica.aricfExpBySector();
        expect(prettyFormat(data)).toMatchSnapshot();
     }, 100000);
    afterAll(() => {
       db.$config.pgp.end();
    });
});
