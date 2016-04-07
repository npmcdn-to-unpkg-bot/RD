import { EventEmitter } from 'angular2/core';

import { ClientAnswer } from '../../models/client-answer';

export class DebtRemedyQuestionPageController {
    
    onAnswerToSummary: EventEmitter<ClientAnswer> = new EventEmitter<ClientAnswer>();
    
    constructor() {
        
    }
    
    onAnswerPassed(ca: ClientAnswer) {
      this.onAnswerToSummary.emit(ca);
    }
    
}