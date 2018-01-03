import {IDB} from '@di-pdfs/api-base/lib/db';
import {getIndicatorDataSimple} from '@di-pdfs/api-base/lib/utils';
import sql from './sql';
import * as colors from '@di-pdfs/pdf-base/lib/theme/colors';
import {IDataBasic, IDataRegion, IDataRegionAndRecipient, IDataSector} from '../../types';
import {regionColors, sectorColors, odaRegionColors} from './config';

export class China {
    private db: IDB;
    constructor(db: IDB) {
        this.db = db;
    }
    public async overallMultiExpenditure(): Promise<DH.IBasicIndicator[]> {
        const data: IDataBasic[] =
            await getIndicatorDataSimple({query: sql.overallMultiExpenditure, db: this.db});
        return data.map(obj => ({...obj, color: colors.red}));
    }
    public async flowsByRegion(): Promise<DH.IRegionValue[]> {
        const data: IDataRegion[] = await getIndicatorDataSimple({query: sql.odaLikeFlowsByRegion, db: this.db});
        return data.map(obj => ({...obj, color: regionColors[obj.region]}));
    }
    public async flowsBySector(): Promise<DH.ISectorValue[]> {
        const data: IDataSector[] =
            await getIndicatorDataSimple({query: sql.odaLikeFlowsBySector, db: this.db});
        return data.map(obj => ({...obj, color: sectorColors[obj.sector]}));
    }
    public async odaRecipients(): Promise<DH.IRegionAndRecipient[]> {
        const data: IDataRegionAndRecipient[] =
            await getIndicatorDataSimple({query: sql.odaRecipients, db: this.db});
        return data.map(obj => ({...obj, color: odaRegionColors[obj.region]}));
    }
}

export default {china: (db: IDB) => new China(db)};
