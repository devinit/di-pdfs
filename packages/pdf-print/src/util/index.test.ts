import 'jest';
import {print} from '.';
import * as prettyFormat from 'pretty-format';

describe('pdf print tests', () => {
    it('should print pdf', async () => {
        const destinationUrls = await print({urls: ['https://wwww.google.com']});
        expect(prettyFormat(destinationUrls)).toMatchSnapshot();
    }, 10000);
    
});
