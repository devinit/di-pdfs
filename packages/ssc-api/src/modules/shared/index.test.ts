import {prettyLists} from '@di-pdfs/api-base/lib/utils/test.utils';
import {Shared} from '.';
import db from '@di-pdfs/api-base/lib/db';

describe('SouthAfrica', () => {
    const shared = new Shared(db);
    it('getting dvptCooperation', async () => {
        const data = await shared.dvptCooperation('southAfrica');
        expect(prettyLists(data)).toMatchSnapshot();
     }, 100000);
    it('getting topTchRecipients', async () => {
        const data = await shared.topTchRecipients('brazil');
        expect(prettyLists(data)).toMatchSnapshot();
     }, 100000);
    afterAll(() => {
       db.$config.pgp.end();
    });
});
