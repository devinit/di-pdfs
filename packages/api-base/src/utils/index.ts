import * as R from 'ramda';
import {IEntity, ICurrency, getCurrency, getEntityBySlugAsync} from '../cms/modules/global';
import * as shortid from 'shortid';
import {IhasDiId, Isummable} from './types';
import {IDatabase} from 'pg-promise';
import {IExtensions} from '../db';

export type IDB = IDatabase<IExtensions> & IExtensions;

export const RECIPIENT = 'recipient';
export const DONOR = 'donor';
export const MULTILATERAL = 'multilateral';
export const  CROSSOVER = 'crossover';
// TODO: should get from a refrence file
export const  budgetTypesRefs = {
    actual: 'Actual',
    estimated: 'Estimated',
    proposed: 'Proposed',
    approved: 'Approved',
    budget: 'Budget',
    proj: 'Projected'
};

// makes numerical like values numbers in an object
export const toNumericFields: (obj: any) => any = (obj) => {
    return R.keys(obj).reduce((newObj: any, key: string) => {
        const isKeyNumerical = Number(obj[key]) ? true : false;
        if (isKeyNumerical) {
            return {...newObj, [key]:  Number(obj[key])};
        }
        return {...newObj, [key]: obj[key]};
    }, {});
};

export const toId: (obj: IhasDiId ) => any = (obj) => {
    if (!obj.di_id) return obj;
    const id = obj.di_id;
    const newObj = R.omit(['di_id'], obj);
    return {...newObj, id };
};

export const getTotal = (data: Isummable[]): number =>
    R.reduce<Isummable, number>((sum: number, obj: Isummable): number => {
        if (obj.value) sum += Number(obj.value);
        return sum;
    }, 0, data);

export const getCurrencyCode = async (id: string): Promise<string>  => {
    try {
        const currencyList: ICurrency[] = await getCurrency();
        const entity: IEntity | undefined = await getEntityBySlugAsync(id);
        if (!entity) throw new Error(`entity was not found for slug: ${id}`);
        const currency: ICurrency | undefined = R.find(R.propEq('id', entity.id), currencyList) as ICurrency;
        return currency ? currency.code : 'NCU';
    } catch (error) {
        throw error;
    }
};

export const getTableNameFromSql = (sqlStr: string): string | Error => {
    const matches = sqlStr.match(/FROM(.*)WHERE/);
    if (matches && matches.length) {
        return matches[0].split(/\s/)[1];
    }
    return new Error(`couldnt get table name from sql string ${sqlStr}`);
};

export const getIndicatorDataSimple = async<T extends {}> ({db, query}: {db: IDB, query: string}): Promise<T[]> => {
    const raw = await db.manyCacheable(query);
    return raw
        .map(toNumericFields)
        .map(obj => ({...obj, uid: shortid.generate()})) as T[];
};

export const isDonor = async (slug: string): Promise<boolean>  => {
    const obj: IEntity | undefined = await getEntityBySlugAsync(slug);
    if (!obj) throw new Error('Error in isDonor function, entity is undefined');
    if (obj.donor_recipient_type === DONOR) return true;
    return false;
};

export const normalizeKeyName = (columnName: string): string => {
    const str = columnName.includes('value_') ? columnName.split(/value\_/)[1] : columnName;
    return str.replace(/\_/g, '-');
};

export const normalizeKeyNames = (obj: {}) => {
    return R.keys(obj).reduce((acc, key) => {
        const newKeyName = key.includes('_') ? normalizeKeyName(key) : key;
        if (newKeyName) {
            const newObj = R.omit([key], obj);
            return {...newObj, [newKeyName]: obj[newKeyName]};
        }
        return {...acc, [key]: obj[key]}; // return to default
    }, {});
};

export const getCurrentYear = (): number => {
    const date = new Date();
    return date.getFullYear();
};

export const capitalize = (val: string) =>
    `${val[0].toUpperCase()}${R.drop(1, val)}`;

export const addSuffix = (val) => {
    // Borrowed from old datahub codebase
    const lastDigit = (val % 10);
    const lastTwoDigits = (val % 100);
    const suffixObj = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];
    const exceptions = [11, 12, 13];
    if (exceptions.indexOf(lastTwoDigits) === -1) {
        return val + suffixObj[lastDigit];
    }
    return val + 'th';
};

export const getMaxAndMin = (data: Array<{year?: number | null}>): number[] => {
    const years = data
        .map(obj => {
            if (obj && obj.year) return Number(obj.year);
            return null;
        })
        .filter(year => year !== null);
    if (!years) return [0, 0];
    const max: number = Math.max.apply(null, years);
    const min: number = Math.min.apply(null, years);
    return [max, min];
};

const removeTrailingZero = (value: string): string => {
    const val = Number(value);
    return  Math.round(val) === val ? val.toString() : value;
};

// (10 ** length) == Math.pow(10, length);
const roundNum = (num, length): string =>
    (Math.round(num * (10 ** length)) / (10 ** length)).toFixed(length);

export const formatNumbers =
    (value: number | string | undefined | null,
     precision: number = 1,
     shouldrRemoveTrailingZero: boolean = false): string => {
    if (value === undefined || value === null) return 'No data';
    const val = Number(value);
    const absValue = Math.abs(val);
    if (absValue < 1e3) {
        const fixed = roundNum(val, precision);
        return shouldrRemoveTrailingZero ? `${removeTrailingZero(fixed)}` : fixed;
    } else if (absValue >= 1e3 && absValue < 1e6) {
        const newValue = val / 1e3;
        const fixed = roundNum(newValue, precision);
        return shouldrRemoveTrailingZero ? `${removeTrailingZero(fixed)}k` : `${fixed}k`;
    } else if (absValue >= 1e6 && absValue < 1e9) {
        const newValue = val / 1e6;
        const fixed = roundNum(newValue, precision);
        return shouldrRemoveTrailingZero ? `${removeTrailingZero(fixed)}m` : `${fixed}m`;
    } else {
        const newValue = val / 1e9;
        const fixed = roundNum(newValue, precision);
        return shouldrRemoveTrailingZero ? `${removeTrailingZero(fixed)}bn` : `${fixed}bn`;
    }
};
