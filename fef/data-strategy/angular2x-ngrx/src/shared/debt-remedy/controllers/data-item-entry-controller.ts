import { EventEmitter, OnInit } from 'angular2/core';

import { ClientAnswer } from '../../models/client-answer';
import { dataItems } from '../../models/data-items';

export class DataItemEntryController implements OnInit {
    
    clientAnswer: any;
    dataItem: any;
    
    onAnswerToQuestionPage: EventEmitter<ClientAnswer> = new EventEmitter<ClientAnswer>();
    
	constructor() {
         
	}
    
    onAnswerChanged(itemCode: string, answerCode: string) {
        let _clientAnswer = new ClientAnswer;
        _clientAnswer.itemCode = itemCode;
        _clientAnswer.answerCode = answerCode;
        _clientAnswer.answerFreq = null;
        this.onAnswerToQuestionPage.emit(_clientAnswer);    
    }
    
    ngOnInit() {
       let _itemCode = this.clientAnswer.itemCode;
       for(let di of dataItems) {
           if(di.itemCode == _itemCode) {
               this.dataItem = di;
           }
       }
    }
}