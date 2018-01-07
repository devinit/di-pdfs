import {IDB} from '@di-pdfs/api-base/lib/db';
import {getIndicatorDataSimple, getTotal} from '@di-pdfs/api-base/lib/utils';
import {departmentColors, regionColors, sectorColors} from './config';
import sql from './sql';
import * as R from 'ramda';
import {IDataBasic, IDataSimple, IDataRegion, IDataSector} from '../../types';

export class SouthAfrica {
    private db: IDB;
    constructor(db: IDB) {
        this.db = db;
    }
    public async dvptCooperationTrend(): Promise<DH.IYearValue[]> {
        const data: IDataSimple[] =
            await getIndicatorDataSimple({query: sql.dvptCooperationTrend, db: this.db});
        return data;
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
        return data
                .filter(obj => obj.value !== null)
                .map(obj => ({...obj, color: regionColors[obj.region]}));
    }
    public async aricfExpBySector(): Promise<DH.ISectorSimple[]> {
        const data: IDataSector[] =
            await getIndicatorDataSimple({query: sql.aricfExpBySector, db: this.db});
        return data.map(obj => ({...obj, color: sectorColors[obj.sector]}));
    }
}

export default {southAfrica: (db: IDB) => new SouthAfrica(db)};
