import {IDB} from '@di-pdfs/api-base/lib/db';
import {getIndicatorDataSimple} from '@di-pdfs/api-base/lib/utils';
import sql from './sql';
import * as colors from '@di-pdfs/pdf-base/lib/theme/colors';
import {IDataBasic} from '../../types';

export const dvptColorMap = {
    brazil: {
        'Other development cooperation': colors.blue,
        'Development cooperation estimated to be ODA eligible': colors.red,
    },
    china: {
        'Multilateral organisations': colors.orange,
        'Gross disbursement of concessional loans': colors.lightRed,
        'Grants and interest free loans': colors.red
    },
    india: {
        'Technical & economic cooperation with other countries': colors.red,
        'Loans and advances to foreign governments': colors.lighterRed,
        'Interest subsidy for lines of credit': colors.darkRed,
        'International organisations': colors.lightRed,
        'Other': colors.darkerRed
    },
};

export class Shared {
    private db: IDB;
    constructor(db: IDB) {
        this.db = db;
    }
    public async dvptCooperation(country: string): Promise<DH.IBasicIndicator[]> {
        const data: IDataBasic[] =
            await getIndicatorDataSimple({query: sql[country].dvptCooperation, db: this.db});
        return data.map(obj => ({...obj, color: dvptColorMap[country][obj.id]}));
    }
    public async topTchRecipients(country: string): Promise<DH.ITopTchRecipients[]> {
        const  data: DH.ITopTchRecipients[] =
            await getIndicatorDataSimple({query: sql[country].tchTopRecipts, db: this.db});
        return data;
    }
}

export default {shared: (db: IDB) => new Shared(db)};
