import { EventEmitter } from 'angular2/core';

import { ClientAnswer } from '../../models/client-answer';

export class DataItemEntryController {
    
    onAnswerToQuestionPage: EventEmitter<ClientAnswer> = new EventEmitter<ClientAnswer>();
    
	constructor() {
         
	}
    
    // When an answer is changed event emitted to parent component -
    // and so on, up the chain to the 'smart' component which communicates with the store
    onAnswerChanged(itemCode: string, answerCode: string) {
        let _clientAnswer = new ClientAnswer;
        _clientAnswer.itemCode = itemCode;
        _clientAnswer.answerCode = answerCode;
        _clientAnswer.answerFreq = null;
        this.onAnswerToQuestionPage.emit(_clientAnswer);    
    }
}