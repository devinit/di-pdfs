import { createApolloFetch, FetchResult } from 'apollo-fetch';
import * as R from 'ramda';
import * as fs from 'fs-extra';
import * as prettier from 'prettier';

export interface IGetAndWriteDataOpts<T> {
  filePath: string;
  query: string;
  variables?: object;
  cb?: ICallBack<T>;
}

export type ICallBack<T> = (data: T) => any;

const apolloFetch = (uri) => createApolloFetch({ uri });

export async function get<T>(uri: string, query: string, variables?: object): Promise<T> {
  try {
    const response: FetchResult = variables
      ? await apolloFetch(uri)({ query, variables })
      : await apolloFetch(uri)({ query });
    if (response.errors) throw response.errors;
    return response.data as T;
  } catch (error) {
    throw error;
  }
}

export const getData = R.curry(get);

const jsonToJs = (json: string): string =>
  `/* tslint:disable */
  // this file is auto generated
  \n
  export default ${json};
  \n
  `;

const writeToFile = (filePath, content: string): Promise<void> =>
  fs.writeFile(filePath, prettier.format(content, { singleQuote: true }));

export async function getAndWrite<T>(uri: string, opts: IGetAndWriteDataOpts<T>): Promise<void> {
  try {
    const { query, variables, filePath, cb } = opts;
    const response: T = await getData(uri, query, variables);
    if (cb) return await writeToFile(filePath, cb(response));
    const content: string = jsonToJs(JSON.stringify(response));
    return await writeToFile(filePath, content);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export const getAndWriteData = R.curry(getAndWrite);
