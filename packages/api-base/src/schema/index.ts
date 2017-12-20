
import { GraphQLSchema} from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { mergeResolvers } from 'merge-graphql-schemas';
import { getTypeDefs } from '../makeTypeDefs';
import {precache} from '../cache';
import db from '../db';
import {githubGet} from '../github';

const getResolvers = (baseDirectory) => {
    const resolverFiles = (require as any).context(`./${baseDirectory}`, true, /resolver\.ts/);
    // get graphql resolver objects
    const resolversLoad: any[] = resolverFiles.keys()
        .map(moduleName => resolverFiles(moduleName).default);
    return resolversLoad.length > 1
        ? mergeResolvers(resolversLoad) : resolversLoad[0];
};

interface Ischema {
    apiModules: any[];
    gqlTypesGlobPattern?: string;
    resolverDir: string;
}

// TODO: use & to ceate the resulting returned type
export const createSchema = async ({apiModules, gqlTypesGlobPattern, resolverDir}: Ischema): Promise<any> => {
    const typeDefs = await getTypeDefs(gqlTypesGlobPattern);
    const modulesWithConnectors = apiModules.forEach((module)  => module(db, githubGet));
    const resolvers = getResolvers(resolverDir);
    const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers });
    return { schema, context: {modules: modulesWithConnectors} };
};

export const preCacheAll = async () => {
    await precache({
        cms: githubGet,
        dw: db.manyCacheable
    });
};
