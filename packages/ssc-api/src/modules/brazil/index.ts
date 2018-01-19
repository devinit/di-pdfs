import {IDB} from '@devinit/api-base/lib/db';
import {getIndicatorDataSimple,  groupedValuesIntoPercents} from '@devinit/api-base/lib/utils';
import sql from './sql';
import regionColors from './config';
import {IDataRegion} from '../../types';
export class Brazil {
    private db: IDB;
    constructor(db: IDB) {
        this.db = db;
    }
    public async tchCooperationByRegion(): Promise<DH.ITchCooperationByRegion[]> {
        const data = await
            getIndicatorDataSimple({query: sql.tchCooperationByRegion, db: this.db}) as  IDataRegion[];
        const withColor: DH.ITchCooperationByRegion[] =
            data.map(obj => ({...obj, color: regionColors[obj.region]}));
        return groupedValuesIntoPercents(withColor, 'year', 1);
    }
}

export default {brazil: (db: IDB) => new Brazil(db)};
