import * as prettyFormat from 'pretty-format';
import {China} from '.';
import db from '@di-pdfs/api-base/lib/db';

describe('China', () => {
    const china = new China(db);
    it('getting dvptCooperation', async () => {
       const data = await china.dvptCooperation();
       expect(prettyFormat(data)).toMatchSnapshot();
    }, 100000);
    it('getting multiCooperation', async () => {
        const data = await china.odaLikeFlowsByRegion();
        expect(prettyFormat(data)).toMatchSnapshot();
     }, 100000);
    it('getting tch top recipients', async () => {
        const data = await china.odaLikeFlowsBySector();
        expect(prettyFormat(data)).toMatchSnapshot();
     }, 100000);
    it('getting tch top recipients', async () => {
        const data = await china.odaRecipients();
        expect(prettyFormat(data)).toMatchSnapshot();
     }, 100000);
    it('getting tch top recipients', async () => {
        const data = await china.overallMultiExpenditure();
        expect(prettyFormat(data)).toMatchSnapshot();
     }, 100000);
    afterAll(() => {
       db.$config.pgp.end();
    });
});
