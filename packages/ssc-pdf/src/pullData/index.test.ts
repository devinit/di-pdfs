import * as prettyFormat from 'pretty-format';
import {gqlFileContent} from '.';

describe('Pull Data', () => {
    it('read in gql Files', async () => {
        const data = gqlFileContent();
        expect(prettyFormat(data)).toMatchSnapshot();
     });
});
