/**
 * merge south south coperation pdfs with current (old) country profile pdfs
 */

import countries from './data';
import * as os from 'os';
import {URL} from 'url';
import * as R from 'ramda';
import {splitPdfs, print, mergePdfs} from '../util';

const sscBaseUrl = 'http://localhost:7777';

const oldProfileUrl = 'http://localhost:5000/#!/country';

const outDir = `${os.homedir()}/ssc/out`; // make sure exists

const oldurl = new URL(oldProfileUrl);

const sscUrl = new URL(sscBaseUrl);

const baseFileName = (url) => `${url.hostname}-${url.port}`;

export const printPdfs = async () => {
    try {
        const urlObjArr = countries.map(country => {
            const oldP = `${oldProfileUrl}/${country}?print`;
            const sscP = `${sscBaseUrl}/${country}`;
            return {oldP, sscP};
        });
        ['oldP', 'sscP'].map(key => {
            const urls = urlObjArr.map(obj => obj[key]);
            return print({destDir: outDir, urls});
        });
    } catch (error) {
        console.error(error);
    }
};

export const splitOldPdfs = (): Array<Promise<any>> => {
    console.log('start splitting pdf pages ...');
    return countries.map((country) => {
        const base = baseFileName(oldurl);
        const fileName = `${outDir}/${base}-${country}.pdf`;
        return splitPdfs(outDir, fileName);
    });
};

export const combinePdfs = () => {
    console.log('start combining pdf pages ...');
    countries.forEach(country => {
        const baseOld = baseFileName(oldurl);
        const baseSSC = baseFileName(sscUrl);
        const pages = R.range(1, 4).map(index =>
            `${outDir}/${baseOld}-${country}-0${index}.pdf`
        );
        const destFile = `${outDir}/merged-${country}.pdf`;
        const sscFile = `${outDir}/${baseSSC}-${country}.pdf`;
        const firstPages = R.take(2, pages);
        const lastPages = R.takeLast(2, pages);
        const pdfs = [...firstPages, sscFile, ...lastPages];
        mergePdfs(destFile, pdfs);
     });
};

const main = () => {
    // hack, should use promises to sequence the actions;
    printPdfs();
    // wait for printing to first occur, currently taking about 30 secs
    setTimeout (splitOldPdfs, 30000);
    // wait for splitting to first occur
    setTimeout(combinePdfs, 40000);
};

main();
