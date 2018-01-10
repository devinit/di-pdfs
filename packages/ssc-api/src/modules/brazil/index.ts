import {IDB} from '@devinit/api-base/lib/db';
import {getIndicatorDataSimple} from '@devinit/api-base/lib/utils';
import sql from './sql';
import regionColors from './config';
import {IDataRegion} from '../../types';
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
