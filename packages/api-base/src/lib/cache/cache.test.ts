import 'jest';
import {readCacheData, ICached, isKeyInCacheFile} from '.';
import * as prettyFormat from 'pretty-format';
import {isError} from '../isType';
import * as path from 'path';

describe('cache module tests', () => {
    const cachePath = path.resolve(__dirname, './test-data/.cache');

    it('should read precache file and return an array of JS objects', async () => {
        const cachedData: ICached[] | Error = await readCacheData(cachePath);
        if (isError(cachedData)) return console.error(cachedData);
        expect(cachedData[0].key).toBe('global-picture/themes.csv');
        expect(cachedData.length).toBe(3);
        expect(prettyFormat(cachedData)).toMatchSnapshot();
    });

    it ('should write to cache file only unique new keys', async () => {
        const isKeyInCache = await isKeyInCacheFile('global-picture/themes.csv', cachePath);
        if (isError(isKeyInCache)) console.error(isKeyInCache);
        expect(isKeyInCache).toBe(true);
    });
});
