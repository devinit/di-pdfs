import {prettyLists} from '@devinit/api-base/lib/utils/test.utils';
import {Shared} from '.';
import db from '@devinit/api-base/lib/db';

describe('shared data', () => {
    const shared = new Shared(db);
    it('getting dvptCooperation', async () => {
        const data = await shared.dvptCooperation('india');
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
