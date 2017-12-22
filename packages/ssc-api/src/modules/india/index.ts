import {IDB} from '@di-pdfs/api-base/lib/db';
import {getIndicatorDataSimple} from '@di-pdfs/api-base/lib/utils';
import sql from './sql';
import * as colors from '@di-pdfs/pdf-base/lib/theme/colors';
import {IDataMulti} from '../../types';

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
    public async multiCooperation(): Promise<DH.IMultialatral[]> {
        const data: IDataMulti[] =
            await getIndicatorDataSimple({query: sql.multiContributions, db: this.db});
        return data.map(obj => ({...obj, color: multilateralColors[obj.multilateral]}));
    }
}

export default {india: (db: IDB) => new India(db)};
