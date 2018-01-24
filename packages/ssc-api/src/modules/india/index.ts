import {IDB} from '@devinit/graphql-next/lib/db';
import {getIndicatorDataSimple} from '@devinit/graphql-next/lib/utils';
import sql from './sql';
import multilateralColors from './config';
import {IDataMulti} from '../../types';

export class India {
    private db: IDB;
    constructor(db: IDB) {
        this.db = db;
    }
    public async multiCooperation(): Promise<DH.IMultialatral[]> {
        const data =
            await getIndicatorDataSimple({query: sql.multiContributions, db: this.db}) as IDataMulti[];
        return data.map(obj => ({...obj, color: multilateralColors[obj.multilateral]}));
    }
}

export default {india: (db: IDB) => new India(db)};
