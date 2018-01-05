// This file is auto generated by the gqlToTs.ts module
// tslint:disable
// graphql typescript definitions

declare namespace DH {
  interface IGraphQLResponseRoot {
    data?: IQuery;
    errors?: Array<IGraphQLResponseError>;
  }

  interface IGraphQLResponseError {
    message: string;            // Required for all errors
    locations?: Array<IGraphQLResponseErrorLocation>;
    [propName: string]: any;    // 7.2.2 says 'GraphQL servers may provide additional entries to error'
  }

  interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }


  interface IQuery {
    tchCooperationByRegion: Array<ITchCooperationByRegion> | null;
    overallMultiExpenditure: Array<IBasicIndicator> | null;
    flowsByRegion: Array<IRegionValue> | null;
    flowsBySector: Array<ISectorValue> | null;
    odaRecipients: Array<IRegionAndRecipient> | null;
    multiCooperation: Array<IMultialatral> | null;
    dvptCooperation: Array<IBasicIndicator> | null;
    topTchRecipients: Array<ITopTchRecipients> | null;
    dvptCooperationTrend: Array<IYearValue> | null;
    govmtdepartment: Array<IBasicIndicator> | null;
    aricfExpByRegion: Array<IRegionYearValue> | null;
    aricfExpBySector: Array<ISectorSimple> | null;
  }


  interface ITchCooperationByRegion {
    region: string;
    color: string;
    year: number;
    value: number;
    uid: string;
  }


  interface IBasicIndicator {
    id: string;
    year: number;
    color: string;
    value: number;
    uid: string;
  }


  interface IRegionValue {
    region: string;
    color: string;
    value: number;
    uid: string;
  }


  interface ISectorValue {
    sector: string;
    color: string;
    value: number;
    uid: string;
    year: number;
  }


  interface IRegionAndRecipient {
    region: string;
    recipient: string;
    color: string;
    value: number;
    uid: string;
  }


  interface IMultialatral {
    multilateral: string;
    color: string;
    value: number;
    year: number;
    uid: string;
  }


  interface ITopTchRecipients {
    recipient: string;
    value: number;
  }


  interface IYearValue {
    year: number;
    value: number;
    uid: string;
  }


  interface IRegionYearValue {
    region: string;
    year: number;
    color: string;
    value: number;
    uid: string;
  }


  interface ISectorSimple {
    sector: string;
    color: string;
    value: number;
    uid: string;
  }


  interface ITrendIndicator {
    year: number;
    color: string;
    value: number;
    uid: string;
  }
}

// tslint:enable
