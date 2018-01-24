import {IDB} from '@devinit/graphql-next/lib/db';
import {getIndicatorDataSimple, valuesIntoPercents, getTotal} from '@devinit/graphql-next/lib/utils';
import sql from './sql';
import {groupBy, keys} from 'ramda';
import * as colors from '@devinit/pdf-base/lib/theme/colors';
import {IDataBasic, IDataRegion, IDataRegionAndRecipient, IDataSector} from '../../types';
import {regionColors, sectorColors, odaRegionColors} from './config';

export class China {
    private db: IDB;
    constructor(db: IDB) {
        this.db = db;
    }
    public async overallMultiExpenditure(): Promise<DH.IBasicIndicator[]> {
        const data = await
            getIndicatorDataSimple({query: sql.overallMultiExpenditure, db: this.db}) as IDataBasic[];
        return data.map(obj => ({...obj, color: colors.red}));
    }
    public async flowsByRegion(): Promise<DH.IRegionValue[]> {
        const data = await getIndicatorDataSimple({query: sql.odaLikeFlowsByRegion, db: this.db}) as  IDataRegion[];
        return valuesIntoPercents(data.map(obj => ({...obj, color: regionColors[obj.region]})));
    }
    public async flowsBySector(): Promise<DH.ISectorValue[]> {
        const data =
            await getIndicatorDataSimple({query: sql.odaLikeFlowsBySector, db: this.db}) as  IDataSector[];
        // combining similar keys
        const grouped = groupBy((obj) => obj.sector, data);
        const reduced: IDataSector[] = keys(grouped).map((key: string) => {
            const group: IDataSector[] = grouped[key];
            const total = getTotal(group);
            return {...group[0], value: total};
        });
        return valuesIntoPercents(reduced.map(obj => ({...obj, color: sectorColors[obj.sector]})));
    }
    public async odaRecipients(): Promise<DH.IRegionAndRecipient[]> {
        const data =
            await getIndicatorDataSimple({query: sql.odaRecipients, db: this.db}) as IDataRegionAndRecipient[];
        return data.map(obj => ({...obj, color: odaRegionColors[obj.region]}));
    }
}

export default {china: (db: IDB) => new China(db)};
