import {IMain, IDatabase, IOptions} from 'pg-promise';
import {dwConfig} from './config';
import * as pgPromise from 'pg-promise';
import * as LRU from 'lru-cache';

export interface IExtensions {
    manyCacheable: (query: string, values?: object) => Promise<any[]>;
}

const lruOpts: LRU.Options<any> = {
    max: 300,
    maxAge: 1000 * 60 * 60 * 60
};

export const dbCache: LRU.Cache<any, any> = LRU(lruOpts);

// pg-promise initialization options:
const options: IOptions<IExtensions> = {
    // Extending the database protocol with our custom modules
    // API: http://vitaly-t.github.io/pg-promise/global.html#event:extend
    extend: (obj: IExtensions & IDatabase<IExtensions>) => {
        obj.manyCacheable = (query: string, values?: any) => {
            const getQuery = values ? pgPromise.as.format(query, values) : query;
            if (dbCache.has(getQuery)) {
                return Promise.resolve(dbCache.get(getQuery));
            }
            return obj.any(getQuery);
        };
    },
    // caching
    receive: (data, _result, event) => {
        // cache recieved
        if (!dbCache.has(event.query)) dbCache.set(event.query, data);
    }
};

const pgp: IMain = pgPromise(options);

// Create the database instance with extensions:
const db = pgp<IExtensions>(dwConfig);

process.on('exit', (code) => {
  // kill db
  pgp.end();
  console.log(`About to exit with code: ${code}, closed DB connection`);
  process.kill(process.pid);
});

process.on('SIGINT', () => {
    // kill db
    pgp.end();
    console.log('Ctrl-C... forced termination closed DB connection');
    process.kill(process.pid);
});

// If you ever need access to the library's root (pgp object), you can do it via db.$config.pgp
// See: http://vitaly-t.github.io/pg-promise/Database.html#.$config
export default db;

export type IDB = IDatabase<IExtensions> & IExtensions;
