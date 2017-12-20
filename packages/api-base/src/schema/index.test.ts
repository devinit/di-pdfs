import * as prettyFormat from 'pretty-format';
import {getResolvers} from '.';

describe('Schema', () => {
    it('getting resolvers', async () => {
       const data = await getResolvers('src/schema/**/resolver.js');
       expect(prettyFormat(data)).toMatchSnapshot();
    }, 1000);
});
