import { EventEmitter } from 'angular2/core';

import { ClientAnswer } from '../../models/client-answer'
import { questionPages } from '../../models/question-pages';

export class DebtRemedySummaryController {
    
    onAnswerToContainer: EventEmitter<ClientAnswer> = new EventEmitter<ClientAnswer>();
    _questionPages = [];
    
    constructor() {
        this._questionPages = questionPages;
    }
    
    onAnswerPassed(ca: ClientAnswer) {
        this.onAnswerToContainer.emit(ca);
    }   
    
}