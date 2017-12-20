import 'require-context/register'; // require-context shim
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
// import * as cors from 'cors';
import * as express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import * as LRU from 'lru-cache';
import {createSchema} from './schema';

// Default port or given one.
export const GRAPHQL_ROUTE = '/graphql';
export const GRAPHIQL_ROUTE = '/graphiql';

export interface IMainOptions {
  enableCors?: boolean;
  enableGraphiql?: boolean;
  gqlTypesGlobPattern?: string;
  resolverPattern: string;
  apiModules: any[];
  env?: string;
  port?: number;
  verbose ?: boolean;
}

// /* istanbul ignore next: no need to test verbose print */
function verbosePrint(port, enableGraphiql) {
  console.log(`GraphQL Server is now running on http://localhost:${port}${GRAPHQL_ROUTE}`);
  if (true === enableGraphiql) {
    console.log(`GraphiQL Server is now running on http://localhost:${port}${GRAPHIQL_ROUTE}`);
  }
}

const graphqlMiddleware = [
  bodyParser.text({
    type: 'application/graphql'
  }),
  // tslint:disable-next-line:variable-name
  (req, _res, next) => {
    if (req.is('application/graphql')) {
      req.body = {
        query: req.body
      };
    }
    next();
  }
];

const lruOpts: LRU.Options<any> = {
  max: 500,
  maxAge: 1000 * 60 * 60 * 60
};

export const appCache: LRU.Cache<any, any> = LRU(lruOpts);

const appCacheMiddleWare = (req, res, next) => {
  const query = JSON.stringify(req.body.query + req.body.variables); // TODO: turn into ashorter key
  if (appCache.has(query)) {
    return res.status(200)
      .json(JSON.parse(appCache.get(query)));
  }
  return next();
};

const setupGraphql = async (options: IMainOptions, app) => {
    try {
        const schema = await createSchema({
          resolverPattern: options.resolverPattern,
          gqlTypesGlobPattern: options.gqlTypesGlobPattern,
          apiModules: options.apiModules
        });

        app.use(GRAPHQL_ROUTE, appCacheMiddleWare);

        app.use(GRAPHQL_ROUTE, ...graphqlMiddleware, (req, res, next) => {
          return graphqlExpress({
            ...schema,
            formatResponse: (data) => {
              setImmediate(() => {
                // for caching responeses
                const query = JSON.stringify(req.body.query + req.body.variables);
                appCache.set(JSON.stringify(query), JSON.stringify([data]));
              });
              return data;
            }
          })(req, res, next);
        });

        if (options.enableGraphiql) {
          app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
        }

        return new Promise((resolve) => {
          const server = app.listen(options.port, () => {
            /* istanbul ignore if: no need to test verbose print */
            if (options.verbose) {
              verbosePrint(options.port, options.enableGraphiql);
            }
            resolve(server);
          }).on('error', (err: Error) => {
            console.error(err);
          });
        });
      } catch (error) {
        if (error) console.error(error);
      }
};

export async function main(opts: IMainOptions) {
  const options = {
    enableCors: true,
    env: process.env.NODE_ENV,
    port: 3000,
    verbose: true,
    ...opts
  };
  const app = express();

  app.use(helmet());

  app.use(bodyParser.json());

  // TODO: log to file
  app.use(morgan(options.env === 'production' ? 'tiny' : 'combined'));

  // if (true === options.enableCors) app.use(GRAPHQL_ROUTE, cors());

  app.use(compression());

  app.get('/', (_req, res) => res.send('graphiql server works, explore it at the /graphiql route'));

  setupGraphql(options, app);
}
