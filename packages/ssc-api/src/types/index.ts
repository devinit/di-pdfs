export interface IDataBasic {
    id: string;
    value: number;
    year: number;
    uid: string;
}

export interface IDataRegion {
    region: string;
    value: number;
    year: number;
    uid: string;
}

export interface IDataSector {
    sector: string;
    value: number;
    year: number;
    uid: string;
}
export interface IDataRegionAndRecipient {
    region: string;
    value: number;
    year: number;
    uid: string;
    recipient: string;
}

export interface IDataMulti {
    multilateral: string;
    value: number;
    year: number;
    uid: string;
}