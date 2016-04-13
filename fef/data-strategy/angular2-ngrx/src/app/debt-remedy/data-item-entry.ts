import { Component } from 'angular2/core';

import { DataItemEntryController } from '../../shared/debt-remedy/controllers/data-item-entry-controller';

// Renders each question;
// Render question differently depending on whether it is designated 'Binary' (radio buttons) or 'Multi' (drop-down)
@Component({
    selector: 'data-item-entry',
    inputs: ['question'],
    outputs: ['onAnswerToQuestionPage'],
    styles: [`
    .questionRow {
        max-width: 50em;
        margin: 0 auto;
        padding: 0.25em 0.625em;
        margin-bottom: 20px;
        clear: both;
        
        font-family: Arial,Helvetica,Sans-Serif;
        font-size: 13px;
        color: #4d4d4d;
        
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
        <div class="questionText">{{question.questionText}}</div>
        <div class="questionAnswersBinary" *ngIf="question.itemType == 'Binary'">
            <div *ngFor="#ans of question.questionAnswers">
                <input type="radio" name="{{question.itemCode}}" (click)="onAnswerChanged(question.itemCode, ans.answerCode)" [checked]="ans.answerCode == question.answerCode"> {{ans.answerText}}
            </div>
        </div>
        <div class="questionAnswersMulti" *ngIf="question.itemType == 'Multi'">
            <select (change)="onAnswerChanged(question.itemCode, $event.target.value)">
                <option selected hidden>Please choose...</option>
                <option *ngFor="#ans of question.questionAnswers" [value]="ans.answerCode" [selected]="ans.answerCode == question.answerCode">{{ans.answerText}}</option>
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
