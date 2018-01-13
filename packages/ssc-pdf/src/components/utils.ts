import dvptColorMap from '@devinit/ssc-api/lib/modules/shared/config';

type ILegendData = Array<{color: string; value: string | number}>;
interface ILegendOptions {
    legendData: object;
    data?: any[];
    keyName?: string;
}

export const getLegendData = ({legendData, data, keyName}: ILegendOptions): ILegendData => {
    // keys with no data
    const keysToRemove = data && keyName ? data.reduce((all, obj) => {
        if (obj.value === 0) return [...all, obj[keyName]];
        return all;
    }, []) : [];
    return Object.keys(legendData)
        .filter(key => !keysToRemove.includes(key))
        .map(value => ({color: legendData[value], value}));
};

export const dvptCoLegendData = (country: string): Array<{color: string; value: string}> => {
    return Object.keys(dvptColorMap[country]).map(value => {
        const color = dvptColorMap[country][value];
        return {color, value};
    });
};
