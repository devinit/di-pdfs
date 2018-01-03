import {IDB} from '@di-pdfs/api-base/lib/db';
import {getIndicatorDataSimple} from '@di-pdfs/api-base/lib/utils';
import sql from './sql';
import * as colors from '@di-pdfs/pdf-base/lib/theme/colors';
import vmultilateralColors from './config';
import {IDataMulti} from '../../types';

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
