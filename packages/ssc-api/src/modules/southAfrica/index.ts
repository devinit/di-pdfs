import {IDB} from '@di-pdfs/api-base/lib/db';
import {getIndicatorDataSimple, getTotal} from '@di-pdfs/api-base/lib/utils';
import sql from './sql';
import * as colors from '@di-pdfs/pdf-base/lib/theme/colors';
import * as R from 'ramda';
import {IDataBasic, IDataRegion, IDataSector} from '../../types';

const departmentColors = {
    'International Relations and Cooperation': colors.lightPurple,
    'National Treasury': colors.lightRed,
    'Other': colors.darkRed
};

const regionColors = {
    'Africa': colors.red,
    'Latin America and the Caribbean': colors.lightRed,
    'Asia': colors.lighterRed
};

const sectorColors = {
    'Human resources development': colors.lighterRed,
    'ARICF expenditures (total)': colors.pink,
    'Coopertion between South Africa and other states': colors.darkerRed,
    'Promotion of democracy and good governance': colors.lightRed,
    'Prevention and resolution of conflicts': colors.lightPink,
    'Socio-economic  development and integration': colors.red,
    'Humanitarian assistance': colors.darkRed
};

export class SouthAfrica {
    private db: IDB;
    constructor(db: IDB) {
        this.db = db;
    }
    public async govmtdepartment(): Promise<DH.IBasicIndicator[]> {
        const data: IDataBasic[] =
            await getIndicatorDataSimple({query: sql.govmtdepartment, db: this.db});
        const yearGroups = R.groupBy((obj => obj.yearStr), data.map(obj => ({...obj, yearStr: obj.year.toString()})));
        const yearGroupTotals = Object.keys(yearGroups)
            .reduce((all, year) => ({...all, [year]: getTotal(yearGroups[year])}), {});
        const valuesAsPcts = data.map(obj =>
            ({...obj, value: (obj.value / yearGroupTotals[obj.year.toString()]) * 100  }));
        return valuesAsPcts.map(obj => ({...obj, color: departmentColors[obj.id]}));
    }
    public async aricfExpByRegion(): Promise<DH.IRegionYearValue[]> {
        const data: IDataRegion[] = await getIndicatorDataSimple({query: sql.aricfExpByRegion, db: this.db});
        return data.map(obj => ({...obj, color: regionColors[obj.region]}));
    }
    public async aricfExpBySector(): Promise<DH.ISectorValue[]> {
        const data: IDataSector[] =
            await getIndicatorDataSimple({query: sql.aricfExpBySector, db: this.db});
        return data.map(obj => ({...obj, color: sectorColors[obj.sector]}));
    }
}

export default {southAfrica: (db: IDB) => new SouthAfrica(db)};
