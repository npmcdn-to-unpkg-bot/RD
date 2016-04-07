import { Pipe } from 'angular2/core';
import { dataItems } from '../models/data-items';

@Pipe({
    name: "inCategory"
})

export class InCategory {
    transform(value, itemCategory) {
        
        let diCodes: Array<string> = new Array<string>();
        
        for(let di of dataItems)
        {
            if(di.itemCategory == itemCategory)
            {
                diCodes.push(di.itemCode);
            }
        }
        
        return value.filter((item) => diCodes.indexOf(item.itemCode) > -1);
    }
}