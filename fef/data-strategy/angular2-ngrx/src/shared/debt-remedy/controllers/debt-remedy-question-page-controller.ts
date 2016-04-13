import { EventEmitter } from 'angular2/core';

import { ClientAnswer } from '../../models/client-answer';

export class DebtRemedyQuestionPageController {
    
    onAnswerToSummary: EventEmitter<ClientAnswer> = new EventEmitter<ClientAnswer>();
    
    constructor() {
        
    }
    
    // Conduit for ClientAnswer change event from subcomponents; event is handled by parent component.
    onAnswerPassed(ca: ClientAnswer) {
      this.onAnswerToSummary.emit(ca);
    }
    
}