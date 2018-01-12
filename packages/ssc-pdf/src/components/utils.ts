import dvptColorMap from '@devinit/ssc-api/lib/modules/shared/config';

export const getLegendData = (data: object): Array<{color: string; value: string | number}> =>
    Object.keys(data)
            .map(value => ({color: data[value], value}));

export const dvptCoLegendData = (country: string): Array<{color: string; value: string}> => {
    return Object.keys(dvptColorMap[country]).map(value => {
        const color = dvptColorMap[country][value];
        return {color, value};
    });
};
