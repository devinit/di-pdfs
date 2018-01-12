// a patch for pretty format output that will exclude uids from storyshots
// this is because they are not constants and change on every new storyshots
// the issue with this is that we cant compare new and old storyshots
import * as prettyFormat from 'pretty-format';

export type ListWithUid = Array<{uid: string}>;

export interface IHasUid {
    [field: string]: {
        data: ListWithUid;
        toolTip: any;
    };
}

export const replaceUidInList = (data: ListWithUid): ListWithUid => {
    return data.map(obj => {
        if (obj && obj.uid) obj.uid = 'unique_id_stub';
        return obj;
    });
};

export const uidPatchForTabData = (data: IHasUid) => {
    return Object.keys(data).reduce((acc, key: string) => {
        const itemsWithUid: ListWithUid = data[key].data;
        const newItems =  replaceUidInList(itemsWithUid);
        return {...acc, [key]: { ...data[key], data: newItems}};
    }, {});
};

export const prettyLists =
    (data: ListWithUid) => prettyFormat(replaceUidInList(data));
