
import { GraphQLSchema} from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { mergeResolvers } from 'merge-graphql-schemas';
import { getTypeDefs } from '../lib/makeTypeDefs';
import {precache} from '../lib/cache';
import db from '../lib/db';
import {githubGet} from '../lib/github';

const resolverFiles = (require as any).context('./', true, /resolver\.ts/);

// get graphql resolver objects
const resolversLoad: any[] = resolverFiles.keys()
    .map(moduleName => resolverFiles(moduleName).default);

const resolvers = resolversLoad.length > 1
    ? mergeResolvers(resolversLoad) : resolversLoad[0];

// export interface IContext {
//     dw: IExtensions;
//     cms: ICms;
// }

// TODO: use & to ceate the resulting returned type
export const createSchema = async (apiModules: any[], gqlTypesGlobPattern?: string): Promise<any> => {
    const typeDefs = await getTypeDefs(gqlTypesGlobPattern);
    const modulesWithConnectors = apiModules.forEach((module)  => module(db, githubGet));
    const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers });
    return { schema, context: {modules: modulesWithConnectors} };
};

export const preCacheAll = async () => {
    await precache({
        cms: githubGet,
        dw: db.manyCacheable
    });
};
