import {getAndWriteData} from '@di-pdfs/api-base/lib/query';
import * as path from 'path';
import * as fs from 'fs-extra';

const basePath = 'src/components';

const getWrite = getAndWriteData('http://localhost:3000/graphql');

const getGql = (fileName: string): string => fs.readFileSync(`src/pullData/${fileName}.gql`, 'utf8');

export const gqlFileContent = (): Array<{country: string, query: string}> =>
  ['brazil', 'china', 'southAfrica', 'india'].map((country) => ({country, query: getGql(country)}));

export const getCountriesData = async () => {
    try {
        gqlFileContent().forEach(async ({country, query}) => {
        const filePath = path.join(basePath, `${country}/data.ts`);
        await getWrite({ query, filePath});
      });
    } catch (error) {
      console.error(error);
    }
};

if (process.env.NODE_ENV !== 'test') {
  getCountriesData();
}