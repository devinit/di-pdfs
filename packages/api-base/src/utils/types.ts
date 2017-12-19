import {IDatabase} from 'pg-promise';
import {IExtensions} from '../lib/db';

export interface IGetIndicatorArgs {
    id?: string;
    query: string;
    country?: string;
    table?: string;
    conceptType: string; // folder with concept file
    db: IDatabase<IExtensions> & IExtensions;
}
export interface ISpotlightGetIndicatorArgs {
    id: string;
    query: string;
    country: string;
    l1?: string;
    schema: string;
    table?: string;
    conceptType: string; // folder with concept file
    db: IDatabase<IExtensions> & IExtensions;
}
export interface IRAWPopulationGroup {
    di_id: string;
    value_rural: string;
    value_urban: string;
    year: string;
}
export interface IRAWPopulationAgeBand {
    di_id: string;
    value_0_14: string;
    value_15_64: string;
    value_65_and_above: string;
    year: string;
}
interface ISqlSimple {
    indicator: string;
    indicatorRange: string;
}
export interface IGetIndicatorArgsSimple {
    id?: string;
    db: IDatabase<IExtensions> & IExtensions;
    start_year?: number;
    end_year?: number;
    sql?: ISqlSimple;
    table?: string;
    query?: string;
}
export interface IRAW {
    di_id: string;
    value_ncu?: string;
    district_id: string;
    value: string;
    year: string;
}
export interface IProcessedSimple {
    id: string;
    value: number;
    year: number;
    uid: string;
    budget_type?: string;
}
export interface IRAWMulti {
    di_id: string;
    value: string;
    value_1: string;
    year: string;
}
export interface IRAWQuintile {
    value_bottom_20pc: string;
    value_2nd_quintile: string;
    value_3rd_quintile: string;
    value_4th_quintile: string;
    value_5th_quintile: string;
}
export interface IRAWFlow {
    di_id: string;
    year: string;
    flow_category_order: number;
    direction: string;
    flow_type: string;
    flow_name: string;
    value: string;
}
export interface IRAWDomestic {
    di_id: string;
    year: string;
    budget_type: string;
    l1: string;
    l2: string;
    l3: string;
    l4: string;
}
export interface IToolTipArgs {
    query?: string;
    id?: string;
    conceptType: string;
}
export interface Isummable {
    value: number | string | null;
}

export interface IhasDiId {
    di_id: string;
}

export interface IhasId {
    id: string | null;
}
export interface IGetIndicatorValueArgs {
    id: string;
    sqlList: string[];
    precision?: number;
    db: IDatabase<IExtensions> & IExtensions;
    format: boolean;
}
