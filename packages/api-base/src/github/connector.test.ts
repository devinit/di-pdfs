import 'jest';
import {csvToJson, githubGet} from '.';
import * as prettyFormat from 'pretty-format';

describe('Github connector', () => {

    it('should turn csv string to json Array', async () => {
        const csvStrA = `id,value
                        red,#e8443
                        red-light,#f0826d
                        red-lighter,#f8c1b2`;
        const dataA = await csvToJson<{name: string; id: number}>(csvStrA);
        expect(prettyFormat(dataA)).toMatchSnapshot();
    });
    it('should be able to parse numerical values as numbers', async () => {
        const csvStrA = `id,value
                        red,123
                        red-light,hey
                        red-lighter,190`;
        const dataA = await csvToJson(csvStrA);
        expect(prettyFormat(dataA)).toMatchSnapshot();
    });

    it('should get data from github and return it as json', async () => {
        const themes = await githubGet<{id: string}>('global-picture/theme.csv');
        expect(themes.length).toBeGreaterThan(2);
        expect(prettyFormat(themes)).toMatchSnapshot();
    }, 10000);
});
