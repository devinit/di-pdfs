
import { GraphQLSchema} from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { mergeResolvers } from 'merge-graphql-schemas';
import { getTypeDefs } from '../makeTypeDefs';
import * as glob from 'glob-promise';
import {precache} from '../cache';
import db from '../db';
import {IDB} from '../db';
import {githubGet} from '../github';

export const getResolvers = async (globPattern) => {
    const resolverFiles: string[]  = await glob(globPattern, {realpath: true});
    if (!resolverFiles.length) throw new Error('wrong resolver glob pattern');
    // get graphql resolver objects
    const resolversLoad: any[] = resolverFiles
        .map(moduleName => require(moduleName));
    return resolversLoad.length > 1
        ? mergeResolvers(resolversLoad) : resolversLoad[0];
};

interface Ischema {
    apiModules: Array<{[name: string]: (db: IDB, githubGet?: any) => any}>;
    gqlTypesGlobPattern?: string;
    resolverPattern: string;
}

// TODO: use & to ceate the resulting returned type
export const createSchema = async ({apiModules, gqlTypesGlobPattern, resolverPattern}: Ischema):
    Promise<{schema: any, context: any}> => {
    try {
        const typeDefs = await getTypeDefs(gqlTypesGlobPattern);
        const modules = apiModules.reduce((all, module)  => {
            const moduleName: string = Object.keys(module)[0];
            const initated = module[moduleName](db, githubGet);
            return {...all, [moduleName]: initated};
        }, {});
        const resolvers = await getResolvers(resolverPattern);
        const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers });
        return { schema, context: {modules} };
    } catch (error) {
        console.error(error);
    }
};

export const preCacheAll = async () => {
    await precache({
        cms: githubGet,
        dw: db.manyCacheable
    });
};
