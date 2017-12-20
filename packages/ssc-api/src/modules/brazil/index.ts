import {IDB} from '@di-pdfs/api-base/lib/db';
import {getIndicatorDataSimple} from '@di-pdfs/api-base/lib/utils';
import sql from './sql';
import {red, blue} from '@di-pdfs/pdf-base/lib/theme/colors';
// import {IEntity, getEntities,
//     getEntityByIdGeneric, getColors } from '@di-pdfs/api-base/lib/cms/modules/global';

const dvptColorMap = {
    'Other development cooperation': blue,
    'Development cooperation estimated to be ODA eligible': red,
};

class Brazil {
    private db: IDB;
    constructor(db: IDB) {
        this.db = db;
    }
    public async dvptCooperation() {
        const data = await getIndicatorDataSimple({query: sql.dvptCooperation, db: this.db});
        return data.map(obj => ({...obj, color: dvptColorMap[obj.id]}));
    }
}

export default {brazil: (db: IDB) => new Brazil(db)};
