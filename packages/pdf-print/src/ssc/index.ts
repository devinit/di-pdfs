/**
 * merge south south coperation pdfs
 */

import countries from './data';
import * as os from 'os';
import {URL} from 'url';
import * as R from 'ramda';
import {splitPdfs, print, mergePdfs} from '../util';

const sscBaseUrl = process.argv && process.argv[2] ?
    `http://${process.argv[2]}` : 'http://localhost:3000';

const oldProfileUrl = process.argv && process.argv[3] ?
    `http://${process.argv[3]}` : 'http://localhost:5000';

const outDir = `${os.homedir()}/ssc/out`; // make sure exists

const oldurl = new URL(oldProfileUrl);

const sscUrl = new URL(sscBaseUrl);

const printPdfs = () => {
    const urlObjArr = countries.map(country => {
        const oldP = `${oldProfileUrl}/country`;
        const sscP = `${sscBaseUrl}/country`;
        return {oldP, sscP};
    });
    ['oldP', 'sscP'].forEach(key => {
        const urls = urlObjArr.map(obj => obj[key]);
        print({destDir: outDir, urls});
    });
};

const splitOldPdfs = () => {
    countries.forEach(country => {
       const fileName = `${outDir}/${oldurl.hostname}-${country}.pdf`;
       splitPdfs(outDir, fileName);
    });
};

const combinePdfs = () => {
    countries.forEach(country => {
        const pages = R.range(1, 5).map(index =>
            `${outDir}/${oldurl.hostname}-${country}-0${index}.pdf`
        );
        const destFile = `${outDir}/merged-${country}.pdf`;
        const sscFile = `${outDir}/${sscUrl.hostname}-${country}.pdf`;
        const pdfs = [...pages, sscFile];
        mergePdfs(destFile, pdfs);
     });
};

const main = () => {
    printPdfs();
    splitOldPdfs();
    combinePdfs();
};
