
import {India} from '.';
import {prettyLists} from '@devinit/api-base/lib/utils/test.utils';
import db from '@devinit/api-base/lib/db';

describe('India', () => {
    const india = new India(db);
    it('getting multiCooperation', async () => {
        const data = await india.multiCooperation();
        expect(prettyLists(data)).toMatchSnapshot();
     }, 100000);
    afterAll(() => {
       db.$config.pgp.end();
    });
});
