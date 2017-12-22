import { createApolloFetch, FetchResult } from 'apollo-fetch';
import * as R from 'ramda';
const apolloFetch = (uri) => createApolloFetch({ uri });

export type ICallBack<T> = (data: T) => any;

async function get<T>(uri, query: string, variables?: object): Promise<T> {
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
