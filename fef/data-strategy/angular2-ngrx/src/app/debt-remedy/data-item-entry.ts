import { Component } from 'angular2/core';

import { DataItemEntryController } from '../../shared/debt-remedy/controllers/data-item-entry-controller';

@Component({
    selector: 'data-item-entry',
    inputs: ['clientAnswer'],
    outputs: ['onAnswerToQuestionPage'],
    styles: [`
    .questionRow {
        max-width: 50em;
        margin: 0 auto;
        padding: 0.25em 0.625em;
        border-color: orange;
        margin-bottom: 20px;
        clear: both;
        
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        flex-direction: row;
    }
    .questionText {
        text-align: left;
        
        -webkit-order: 1;
           order: 1;
        -webkit-flex: 3 3 0; 
           flex: 3 3 0; 
    }
    .questionAnswersBinary {
        text-align: left;
        
        -webkit-order: 2;
           order: 2;
        -webkit-flex: 1 1 0; 
           flex: 1 1 0; 
    }
    .questionAnswersMulti {
        text-align: right;
        -webkit-order: 2;
           order: 2;
        -webkit-flex: 1 1 0; 
           flex: 1 1 0; 
    }
    `],
	template:`
    <div class="questionRow">
        <div class="questionText">{{dataItem.questionText}}</div>
        <div class="questionAnswersBinary" *ngIf="dataItem.itemType == 'Binary'">
            <div *ngFor="#ans of dataItem.questionAnswers">
                <input type="radio" name="{{ans.itemCode}}" (click)="onAnswerChanged(dataItem.itemCode, ans.answerCode)" [checked]="ans.answerCode == clientAnswer.answerCode"> {{ans.answerText}}
            </div>
        </div>
        <div class="questionAnswersMulti" *ngIf="dataItem.itemType == 'Multi'">
            <select (change)="onAnswerChanged(dataItem.itemCode, $event.target.value)">
                <option *ngFor="#ans of dataItem.questionAnswers" [value]="ans.answerCode" [selected]="ans.answerCode == clientAnswer.answerCode">{{ans.answerText}}</option>
            </select>
        </div>
    </div>
    `,

})

export class DataItemEntry extends DataItemEntryController {
     
    constructor() {
        super();
    }
    
    
    
}
