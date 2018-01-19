import {toId, getTotal, formatNumbers, normalizeKeyName, isDonor, groupedValuesIntoPercents} from '.';
import * as prettyFormat from 'pretty-format';

const dataA = [
        {di_id: 'AL', value: 3000, year: 2000},
        {di_id: 'UK', value: 3000, year: 2000}
        ];

describe('Utility functions test', () => {
    it('should remove di_id field in objects and replace with id', () => {
        const formatted = toId(dataA[0]);
        expect(formatted.id).toBe('AL');
    });
    it('should get total of the value field in an array', () => {
        expect(getTotal(dataA)).toBe(6000);
    });
    it('should create human friendly numbers i.e 1.5k for 1500', () => {
        const formattedB = [150, 1500, 15000, 200000000].map(val => formatNumbers(val, 1, true));
        expect(prettyFormat({formattedB})).toMatchSnapshot();
    });
    it('should normalize colum name ie remove _ where necessry', () => {
        const ageBand = normalizeKeyName('value_0_14');
        expect(ageBand).toBe('0-14');
    });
    it('should turn values into percents for grouped data', () => {
        const data = [
            {sector: 'a', value: 2},
            {sector: 'b', value: 3},
            {sector: 'a', value: 4},
            {sector: 'b', value: 7}
        ];
        const result =  groupedValuesIntoPercents(data, 'sector');
        expect(prettyFormat({result})).toMatchSnapshot();
    });
    it('should return whether country is donor or not', async () => {
        const isDonorCountryA = await isDonor('uganda');
        const isDonorCountryB = await isDonor('austria');
        expect(isDonorCountryA).toBe(false);
        expect(isDonorCountryB).toBe(true);
    }, 10000);
});
