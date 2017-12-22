import * as prettyFormat from 'pretty-format';
import {India} from '.';
import db from '@di-pdfs/api-base/lib/db';

describe('India', () => {
    const india = new India(db);
    it('getting dvptCooperation', async () => {
       const data = await india.dvptCooperation();
       expect(prettyFormat(data)).toMatchSnapshot();
    }, 100000);
    it('getting multiCooperation', async () => {
        const data = await india.multiCooperation();
        expect(prettyFormat(data)).toMatchSnapshot();
     }, 100000);
    it('getting tch top recipients', async () => {
        const data = await india.topTchRecipients();
        expect(prettyFormat(data)).toMatchSnapshot();
     }, 100000);
    afterAll(() => {
       db.$config.pgp.end();
    });
});
