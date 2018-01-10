import {IDB} from '@devinit/api-base/lib/db';
import {getIndicatorDataSimple} from '@devinit/api-base/lib/utils';
import sql from './sql';
import dvptColorMap from './config';
import {IDataBasic} from '../../types';

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
