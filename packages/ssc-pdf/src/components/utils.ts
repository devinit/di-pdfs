import dvptColorMap from '@di-pdfs/ssc-api/lib/modules/shared/config';

export const dvptCoLegendData = (country: string): Array<{color: string; value: string}> => {
    return Object.keys(dvptColorMap[country]).map(value => {
        const color = dvptColorMap[country][value];
        return {color, value};
    });
};
