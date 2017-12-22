import {IDB} from '@di-pdfs/api-base/lib/db';
import {getIndicatorDataSimple} from '@di-pdfs/api-base/lib/utils';
import sql from './sql';
import * as colors from '@di-pdfs/pdf-base/lib/theme/colors';
import {IDataRegion} from '../../types';

const regionColors = {
    'Africa': colors.lightRed,
    'Latin America and the Caribbean': colors.lightBlue,
    'Oceania': colors.darkRed,
    'Europe': colors.red,
    'Asia and the Middle East': colors.pink,
    'North America': colors.lightPink
};
export class Brazil {
    private db: IDB;
    constructor(db: IDB) {
        this.db = db;
    }
    public async tchCooperationByRegion(): Promise<DH.ITchCooperationByRegion[]> {
        const data: IDataRegion[] =
            await getIndicatorDataSimple({query: sql.tchCooperationByRegion, db: this.db});
        const withColor: DH.ITchCooperationByRegion[] =
            data.map(obj => ({...obj, color: regionColors[obj.region]}));
        return withColor;
    }
}

export default {brazil: (db: IDB) => new Brazil(db)};
