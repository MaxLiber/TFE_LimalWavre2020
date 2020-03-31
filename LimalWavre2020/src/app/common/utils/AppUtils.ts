import { KvpModel } from '../model/kvp.model';

export class AppUtils
{



    static enumElementCount(enumName: any): number {
        let count = 0;
        for(const item in enumName) {
            if(isNaN(Number(item))) count++;
        }
        return count;
    }

    public static keys(enumType: object) {
        const members = Object.keys(enumType);
        return members.filter((x) => Number.isNaN(parseInt(x, 10)));
    }

    public static stringEnumToKeyValue(enumType: object): Array<KvpModel> {
        return AppUtils.keys(enumType)
            .map((key) => {
                return { key, val: enumType[key] };
             });
     }

}
