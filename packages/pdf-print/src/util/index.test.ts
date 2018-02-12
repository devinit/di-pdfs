import 'jest';
import * as prettyFormat from 'pretty-format';
import {splitPdf} from '.';

describe('pdf print tests', () => {
    it('should split pdf', async () => {
        const pages = await splitPdf('./testData/brazil-old.pdf');
        expect(prettyFormat(pages)).toMatchSnapshot();
    }, 50000);
});
