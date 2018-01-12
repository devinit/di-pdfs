import {githubGet} from '../../../github';
import * as R from 'ramda';

export interface IEntityBasic {
    id: string;
    color?: string;
    name: string;
}
export interface IColor {
    id: string;
    value: string;
}
export interface ICurrency {
    code: string;
    id: string;
    name: string;
}

export interface ICountry {
    id: string;
    name: string;
    slug: string;
    has_domestic_data?: string | null;
    hasPDF?: boolean | null;
    countryType: string;
}
export interface IEntity extends IEntityBasic {
    type: string;
    slug: string;
    id: string;
    name: string;
    region: string;
    income_group: string;
    has_no_pdf?: number;
    donor_recipient_type: string;
    has_domestic_data: string;
}
export interface IRegional extends IEntityBasic {
    dac_continent_code: string;
    dac_id: string;
    dac_continent: string;
}

export const getEntities = (): Promise<IEntity[]> => githubGet<IEntity>('global/entity.csv');

export const getEntityBySlugAsync = async (slug: string): Promise<IEntity> => {
     const entities: IEntity[] = await getEntities();
     const entity: IEntity | undefined = entities.find(obj => obj.slug === slug);
     if (!entity) throw new Error (`failed to get entity for ${slug}`);
     return entity;
};

export const getEntityByIdAsync = async (id: string): Promise<IEntity> => {
    const entities: IEntity[] = await getEntities();
    const entity =  R.find(R.propEq('id', id), entities);
    if (!entity) throw new Error(`failed to get entity for ${id}`);
    return entity as IEntity;
};

export const getCountries = async (): Promise<ICountry[]> => {
    const entities = await getEntities();
    return entities
        .filter(entity => entity.type === 'country')
        .map(entity => ({id: entity.id, name: entity.name, slug: entity.slug, hasPDF: !entity.has_no_pdf,
            has_domestic_data: entity.has_domestic_data, countryType: entity.donor_recipient_type}));
};

export const getEntityByIdGeneric = <T extends {id: string}>(id: string, entities: T[]): T => {
    const entity: T | undefined = entities.find(obj => obj.id === id);
    if (!entity) throw new Error (`couldnt find entity by id for ${id}`);
    return entity;
};

export const getEntityByNameGeneric = <T extends {name: string}>(name: string, entities: T[]): T => {
    const entity: T | undefined = entities.find(obj => obj.name === name);
    if (!entity) throw new Error (`couldnt find entity by name for ${name}`);
    return entity;
};

export const getSectors = (): Promise<IEntityBasic[]> => githubGet<IEntityBasic>('global/sector.csv');
export const getChannels = (): Promise<IEntityBasic[]> => githubGet<IEntityBasic>('global/channel.csv');
export const getBundles = (): Promise<IEntityBasic[]> => githubGet<IEntityBasic>('global/bundle.csv');
export const getRegional = (): Promise<IRegional[]> => githubGet<IRegional>('global/regional.csv');
export const getIncomeGroups = (): Promise<IEntityBasic[]> => githubGet<IEntityBasic>('global/income-group.csv');
export const getFinancingType = (): Promise<IEntityBasic[]> =>
    githubGet<IEntityBasic>('country-profile/financing-type.csv');
export const getCreditorType = (): Promise<IEntityBasic[]> =>
    githubGet<IEntityBasic>('country-profile/creditor-type.csv');
export const getFlowType = (): Promise<IEntityBasic[]> => githubGet<IEntityBasic>('country-profile/flow-type.csv');
export const getDestinationInstitutionType = (): Promise<IEntityBasic[]> =>
    githubGet<IEntityBasic>('country-profile/destination-institution-type.csv');
export const getCurrency = (): Promise<ICurrency[]> => githubGet<ICurrency>('global/currency.csv');
export const getColors = (): Promise<IColor[]> => githubGet<IColor>('global/colors.csv');

export const entitesFnMap = {
    sector: getSectors,
    channel: getChannels,
    bundle: getBundles,
    destination_institution_type: getDestinationInstitutionType,
    financing_type: getFinancingType,
    creditor_type: getCreditorType,
    to: getEntities,
    flow_type: getFlowType,
    from_di_id:  getEntities,
    to_di_id: getEntities,
    from: getEntities,
};
