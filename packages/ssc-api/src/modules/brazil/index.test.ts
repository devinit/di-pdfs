import {prettyLists} from '@devinit/graphql-next/lib/utils/test.utils';
import {Brazil} from '.';
import db from '@devinit/graphql-next/lib/db';

describe('Brazil', () => {
    const brazil = new Brazil(db);
    it('getting tch cooperation', async () => {
        const data = await brazil.tchCooperationByRegion();
        expect(prettyLists(data)).toMatchSnapshot();
     }, 100000);
    afterAll(() => {
       db.$config.pgp.end();
    });
});
