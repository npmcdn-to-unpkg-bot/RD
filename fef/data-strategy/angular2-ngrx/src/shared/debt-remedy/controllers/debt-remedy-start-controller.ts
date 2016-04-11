import { OnInit } from 'angular2/core'

import { Observable } from 'rxjs/Observable';

import { ClientAnswerService } from '../../services/client-answer-service';

import { ClientAnswer } from '../../models/client-answer';
import { QuestionPage } from '../../models/question-page';
import { Question } from '../../models/question';

export class DebtRemedyStartController {
    
    _questions: Observable<Array<Question>>;
    _questionPages: Observable<Array<QuestionPage>>;
    
    // Get observable store states from clientAnswerService
    // using async pipe on bindings passes store values to subcomponents on change.
    constructor(private clientAnswerService: ClientAnswerService) {
        
     }
     
     ngOnInit() {
         this._questions = this.clientAnswerService.questions;
         this._questionPages = this.clientAnswerService.questionPages;
     }
     
     // Catches ClientAnswer change events from subcomponents and calls store update action from clientAnswersService.
     onAnswerToStore(ca: ClientAnswer) {
        this.clientAnswerService.updateAnswer(ca);
     }
}