/**
 * has function that saves out all queried keys from our LRU caches into a json file
 * has function that gets data from all the keys and precaches as app starts
 */
import * as LRU from 'lru-cache';
import * as fs from 'fs-extra';
import {isError, isUndefined} from '../isType';

export interface IIsCached {
    key: string;
    isCached: boolean;
}
export interface ICached {
    key: string;
    type: string;
}

export interface IFetchFnObj {
    dw: (query: string, values?: any) => Promise<any>;
    cms: (query: string) => Promise<any>;
}

const CACHE_QUEUE_DELAY: number = 1000 * 60 * 5;
const PRECACHE_DELAY: number = process.env.NODE_ENV === 'production' ? 10000 : 5000;

export const readCacheData: (file?: string) => Promise<ICached[]> | Error =
    async (file = '.cache') => {
        try {
            const data: string = await fs.readFile(file, 'utf-8');
            return data.split('\n')
                .map(line => {
                    const lineArr = line.split(/:/g);
                    return {key: lineArr[0], type: lineArr[1]};
                })
                .filter(obj => !isUndefined(obj.type));
        } catch (error) {
            if (error) console.error(error);
            return error;
        }
    };

export const precache = async (fetchFnObj: IFetchFnObj, cacheFile: string = '.cache'):
    Promise<void> => {
         try {
            const fileExist: boolean = fs.existsSync(cacheFile);
            if (!fileExist) throw new Error('cache file doesnt exist');
            const cachedData: ICached[] | Error = await readCacheData();
            if (isError(cachedData)) throw new Error('Unknown Error reading cache file');
            cachedData.map(async ({key, type}: ICached) => {
                setTimeout(async () => {
                    try {
                        await fetchFnObj[type](key); // NOTE: the fetch functions have cache set functions
                        if (process.env.NODE_ENV !== 'production') console.info(key, '  ---> isCached: true');
                    } catch (error) {
                        console.error(key, error);
                    }
                }, PRECACHE_DELAY);
            });
        } catch (error) {
           if (error) console.error(error);
           return error;
        }
    };

export const isKeyInCacheFile = async (key: string, file: string = '.cache' ): Promise <boolean | Error> => {
    try {
            const data: string = await fs.readFile(file, 'utf-8');
            return data.split(/\n/g).some(line => line.includes(key));
        } catch (error) {
            if (error) console.error(error);
            return error;
        }
};

// writes a new key entry if no already there
export const writeKeyToCacheFile = async (key: string, cacheType: string, file: string = '.cache'):
    Promise<void> => {
        const isKeyInCache = await isKeyInCacheFile(key, file);
        if (isError(isKeyInCache)) throw Error('possibly cache file doesnt exit');
        if (!isKeyInCache) fs.appendFile('.cache', `${key}:${cacheType}\n`);
        if (process.env.NODE_ENV !== 'production') console.info('Key already exists in cache no need to re-add it');
    };

export const queue: (key: string, cacheType: string, cache: LRU.Cache<any, any>, cb: (string) => Promise<any>) =>
    Promise<any> = async (key, cacheType, cache, cb) => {
        if (process.env.NODE_ENV === 'test') return false;
        return new Promise((resolve, reject) => {
            setTimeout(async () => {
                try {
                    // remove key from cache
                    // so that we dont go into a never ending loop of updating a key's data
                    cache.del(key);
                    await cb(key); // data gets cached again in the callback
                    writeKeyToCacheFile(key, cacheType);
                    if (process.env.NODE_ENV !== 'production') {
                        console.info('ran queue after a delay and added new fresh data for :', key);
                    }
                    resolve(true);
                } catch (error) {
                    if (error) console.error(error);
                    reject(false);
                }
            }, CACHE_QUEUE_DELAY);
        });
    };
