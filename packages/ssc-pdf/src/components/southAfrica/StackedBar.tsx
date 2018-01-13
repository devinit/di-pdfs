import * as React from 'react';
import {Div} from 'glamorous';
import {getLegendData} from '../utils';
import {regionColors, departmentColors} from '@devinit/ssc-api/lib/modules/southAfrica/config';
import {Legend, LegendProps} from '@devinit/pdf-base';
import charts from '@devinit/pdf-base/lib/charts';
import data from './data';

const options = (dataKey: string, groupBy: string) => ({
    data: data[dataKey],
    height: '180px',
    config: {
        groupBy,
        linearAxis: {
            indicator: 'value',
        },
        categoryAxis: {
            indicator: 'year'
        }
    }
});

interface Props {
    dataKey: string;
    groupBy: string;
}

const legendOptions = (dataKey: string): LegendProps => {
    if (dataKey === 'govmtdepartment') {
        return {
            orientation: 'vertical',
            data: getLegendData({legendData: departmentColors, data: data[dataKey], keyName: 'id'})
        };
    }
    return ({
        orientation: 'vertical',
        data: getLegendData({legendData: regionColors, data: data[dataKey], keyName: 'region'})
    });
};

export default (props: Props) =>
    <Div padding="0px" width="100%" display="flex" justifyContent="space-between" >
        <Div width="50%" key="stacked">
            <charts.StackedBar {...options(props.dataKey, props.groupBy)} />
        </Div>
        <Div width="38%" key="legend-stacked">
            <Legend {...legendOptions(props.dataKey)} />
        </Div>
    </Div>;
