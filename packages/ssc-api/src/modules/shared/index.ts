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
        const data =
            await getIndicatorDataSimple({query: sql[country].dvptCooperation, db: this.db}) as IDataBasic[];
        return data.map(obj => ({...obj, color: dvptColorMap[country][obj.id]}));
    }
    public async topTchRecipients(country: string): Promise<DH.ITopTchRecipients[]> {
        const  data =
            await getIndicatorDataSimple({query: sql[country].tchTopRecipts, db: this.db}) as DH.ITopTchRecipients[];
        return data;
    }
}

export default {shared: (db: IDB) => new Shared(db)};
