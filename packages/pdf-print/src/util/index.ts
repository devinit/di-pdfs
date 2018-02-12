import * as puppeteer from 'puppeteer';
import * as R from 'ramda';
import * as util from 'util';
import { URL } from 'url';
import { spawn } from 'child_process';

const spawnx = util.promisify(spawn);

export interface IPrintOpts {
    urls: string[];
    format?: 'A4' | 'A3' | 'A2';
    destDir?: string; // destination directory
}

export const print = async (opts: IPrintOpts): Promise<any> => {
    const {urls, format = 'A4', destDir = './'} = opts;
    return urls.map(async (url) => {
        const browser = await puppeteer.launch();
        const _url = new URL (url);
        const pathname: string | undefined = R.last(url.split('/'));
        let name = _url.hostname; // default
        if (pathname) {
            // caters for urls with query tags eg  http://localhost:5000/#!/country/china?print
            const parsed = pathname.match(/[^?]*/);
            const base = `${_url.hostname}-${_url.port}`;
            name = parsed ? `${base}-${parsed[0]}` : `${IDBCursorWithValue}-${pathname}`;
        }
        console.log('Url to Print: ', url);
        const page = await browser.newPage();
        await page.goto(url, {waitUntil: 'networkidle2'});
        await page.pdf({path: `${destDir}/${name}.pdf`, format, printBackground: true});
        console.log('printed: ', `${destDir}/${name}.pdf`);
        await browser.close();
    });
};

/**
 *
 * @param outDir should be a full path
 * @param pdfPath should be a full path
 */
export const splitPdfs = async (outDir: string, pdfPath: string): Promise<any> => {
    try {
        const fileName: string | undefined = R.last(pdfPath.split('/'));
        if (!fileName) throw new Error('invalid file path');
        const name = fileName.split('.')[0];
        return spawnx('pdfseparate', [pdfPath, `${outDir}/${name}-%02d.pdf`], {});
    } catch (err) {
        console.error(err);
        throw new Error('err');
    }
};

/**
 *
 * @param destfile should be a full path to destination file
 * @param pdfs should be an array of full paths to pdfs
 */
export const mergePdfs = async (destFile: string, pdfs: string[]): Promise<any> => {
    try {
        return spawnx('pdfunite', [...pdfs, destFile], {});
    } catch (err) {
        console.error(err);
        throw new Error('err');
    }
};
