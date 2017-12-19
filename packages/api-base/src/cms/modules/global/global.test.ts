import * as prettyFormat from 'pretty-format';
import {getCountries, getColors} from '.';

describe('Site Global narratives and refrence module', () => {
    it('should return all countries', async () => {
        const entities = await getCountries();
        expect(prettyFormat(entities)).toMatchSnapshot();
    }, 10000);
    it('should return colors', async () => {
        const colors = await getColors();
        expect(prettyFormat(colors)).toMatchSnapshot();
    }, 10000);
});
