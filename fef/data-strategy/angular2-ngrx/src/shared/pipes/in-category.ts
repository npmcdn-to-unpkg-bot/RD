import { Pipe } from 'angular2/core';

@Pipe({
    name: "inCategory"
})

// Returns the items in the supplied array ('value' param) that have the same property 'itemCategory'
// as the supplied string ('itemCategory' param). 
// In this case, divides the array of Questions passed to the 'DebtRemedySummary' component by itemCategory
// to be passed to the numerous DebtRemedyQuestionPage components. 
export class InCategory {
    transform(value, itemCategory) {
        
        return value.filter((item) => item.itemCategory == itemCategory);
    }
}