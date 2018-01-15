import * as prettyFormat from 'pretty-format';
import {get} from '.';

describe('Test query', () => {
    it.skip('should query api', async () => {
        const query = `
            query China {
                overallMultiExpenditure {
                id
                year
                color
                value
                uid
                }
            }`;
        const data = await get('http://localhost:8080/graphql', query);
        expect(prettyFormat(data)).toMatchSnapshot();
     });
});
