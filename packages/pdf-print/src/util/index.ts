import * as puppeteer from 'puppeteer';
import * as R from 'ramda';
import * as util from 'util';
import { URL } from 'url';
import { spawn } from 'child_process';

const spawnx = util.promisify(spawn);

export interface IPrintOpts {
    urls: string[];
    format?: 'A4' | 'A3' | 'A2';
    dest?: string; // destination directory
}

export const print = async (opts: IPrintOpts) => {
    const {urls, format = 'A4', dest = './'} = opts;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    urls.forEach(async (url) => {
        const _url = new URL (url);
        const pathname: string | undefined = R.last(_url.pathname.split('/'));
        const name = `${_url.hostname}-${pathname || ''}`;
        await page.goto(url, {waitUntil: 'networkidle2'});
        await page.pdf({path: `${dest}/${name}`, format});
    });
    await browser.close();
};

export interface IMergeOptions {
    pageNumberToMergeAt: number;
    pdfToMerge: string;
    originalPdf: string;
}
export const splitPdf = async (pdfPath: string): Promise<any> => {
    const {stdout} = await spawn('pdfseparate', [pdfPath, 'page_%02d.pdf']);
    console.log(stdout);
    return stdout;
};

export const mergePdfs = async (opts: IMergeOptions) => {

};
