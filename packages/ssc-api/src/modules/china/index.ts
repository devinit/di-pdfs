import {IDB} from '@di-pdfs/api-base/lib/db';
import {getIndicatorDataSimple} from '@di-pdfs/api-base/lib/utils';
import sql from './sql';
import * as colors from '@di-pdfs/pdf-base/lib/theme/colors';
import {IDataBasic, IDataRegion, IDataRegionAndRecipient, IDataSector} from '../../types';

const regionColors = {
    Africa: colors.blue,
    Oceania: colors.lightBlue,
    Europe: colors.purple,
    Asia: colors.red,
    Americas: colors.green
};

const sectorColors = {
    'Communications': colors.lightPurple,
    'Trade and Tourism': colors.orange,
    'Industry, Mining, Construction': colors.green,
    'Government and Civil Society': colors.lightBlue,
    'Energy Generation and Supply': colors.darkRed,
    'All others': colors.red,
    'Water Supply and Sanitation': colors.blue,
    'Transport and Storage': colors.darkBlue
};

const odaRegionColors = {
    'Africa': colors.red,
    'Central and Eastern Europe': colors.purple,
    'Latin America and the Caribbean': colors.lightBlue,
    'Europe': colors.lightRed,
    'Middle East': colors.pink,
    'The Pacific': colors.lightPink
};

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
    public async odaLikeFlowsByRegion(): Promise<DH.IRegionValue[]> {
        const data: IDataRegion[] = await getIndicatorDataSimple({query: sql.odaLikeFlowsByRegion, db: this.db});
        return data.map(obj => ({...obj, color: regionColors[obj.region]}));
    }
    public async odaLikeFlowsBySector(): Promise<DH.ISectorValue[]> {
        const data: IDataSector[] =
            await getIndicatorDataSimple({query: sql.odaLikeFlowsBySector, db: this.db});
        return data.map(obj => ({...obj, color: sectorColors[obj.sector]}));
    }
    public async odaRecipients(): Promise<DH.IRegionAndRecipient[]> {
        const data: IDataRegionAndRecipient[] =
            await getIndicatorDataSimple({query: sql.odaLikeFlowsBySector, db: this.db});
        return data.map(obj => ({...obj, color: odaRegionColors[obj.region]}));
    }
}

export default {china: (db: IDB) => new China(db)};
