import * as prettyFormat from 'pretty-format';
import {Brazil} from '.';
import db from '@di-pdfs/api-base/lib/db';

describe('Brazil', () => {
    const brazil = new Brazil(db);
    it('getting dvptCooperation', async () => {
       const data = await brazil.dvptCooperation();
       expect(prettyFormat(data)).toMatchSnapshot();
    }, 100000);

    afterAll(() => {
       db.$config.pgp.end();
    });
});
