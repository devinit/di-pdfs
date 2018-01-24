import {IDB} from '@devinit/graphql-next/lib/db';
import {getIndicatorDataSimple} from '@devinit/graphql-next/lib/utils';
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
        return data
            .map(obj => ({
                ...obj,
                value: country === 'india' ? obj.value * 10e3 : obj.value,
                color: dvptColorMap[country][obj.id]})
            );
    }
    public async topTchRecipients(country: string): Promise<DH.ITopTchRecipients[]> {
        const  data =
            await getIndicatorDataSimple({query: sql[country].tchTopRecipts, db: this.db}) as DH.ITopTchRecipients[];
        return data;
    }
}

export default {shared: (db: IDB) => new Shared(db)};
