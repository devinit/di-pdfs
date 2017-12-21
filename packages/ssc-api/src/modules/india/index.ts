import {IDB} from '@di-pdfs/api-base/lib/db';
import {getIndicatorDataSimple} from '@di-pdfs/api-base/lib/utils';
import sql from './sql';
import * as colors from '@di-pdfs/pdf-base/lib/theme/colors';
import {IDataBasic, IDataRegion, IDataMulti} from '../../types';

const dvptColorMap = {
    'Technical & economic cooperation with other countries': colors.red,
    'Loans and advances to foreign governments': colors.lighterRed,
    'Interest subsidy for lines of credit': colors.darkRed,
    'International organisations': colors.lightRed,
    'Other': colors.darkerRed
};

const multilateralColors = {
    'World Bank Group': colors.lighterRed,
    'Southern': colors.lightRed,
    'UN': colors.red,
    'Asian Development Bank': colors.darkRed,
    'Other': colors.darkerRed
};

export class India {
    private db: IDB;
    constructor(db: IDB) {
        this.db = db;
    }
    public async dvptCooperation(): Promise<DH.IBasicIndicator[]> {
        const data: IDataBasic[] = await getIndicatorDataSimple({query: sql.dvptCooperation, db: this.db});
        const withColor: DH.IBasicIndicator[] = data.map(obj => ({...obj, color: dvptColorMap[obj.id]}));
        return withColor;
    }
    public async multiCooperation(): Promise<DH.IMultialatral[]> {
        const data: IDataMulti[] =
            await getIndicatorDataSimple({query: sql.multiContributions, db: this.db});
        return data.map(obj => ({...obj, color: multilateralColors[obj.multilateral]}));
    }
    public async topTchRecipients(): Promise<DH.ITopTchRecipients[]> {
        const  data: DH.ITopTchRecipients[] =
            await getIndicatorDataSimple({query: sql.tchTopRecipts, db: this.db});
        return data;
    }
}

export default {india: (db: IDB) => new India(db)};
