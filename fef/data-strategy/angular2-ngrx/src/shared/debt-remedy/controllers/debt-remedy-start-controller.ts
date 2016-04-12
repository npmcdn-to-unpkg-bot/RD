import { OnInit } from 'angular2/core'

import { Observable } from 'rxjs/Observable';

// *****
// ngrx
// *****
import { ClientAnswerServiceNgrx } from '../../services/client-answer-service-ngrx';

// *****
// Redux
// *****
// import { ClientAnswerServiceRedux } from '../../services/client-answer-service-redux';

import { ClientAnswer } from '../../models/client-answer';
import { QuestionPage } from '../../models/question-page';
import { Question } from '../../models/question';

export class DebtRemedyStartController {
    
    // Since the @ngrx/store Store is Observable, it is assigned to an observable in the ClientAnswerService
    //  and similarly here, so we can take advantage of Angular2's 'async' pipe which automatically subscribes
    //  the component to changes on the Observable and has numerous advantages over regular change detection
    //  including performance.
    // *****
    // ngrx
    // *****
    _questions: Observable<Array<Question>>;
    _questionPages: Observable<Array<QuestionPage>>;
    // *****
    // Redux
    // *****
    // _questions: Array<Question>;
    // _questionPages: Array<QuestionPage>;
    
    
    // *****
    // ngrx
    // *****
    constructor(private clientAnswerService: ClientAnswerServiceNgrx) {
         
    }
    // *****
    // Redux
    // *****
    // constructor(private clientAnswerService: ClientAnswerServiceRedux) {
    //     
    // }
     
    ngOnInit() {
        this._questions = this.clientAnswerService.questions;
        this._questionPages = this.clientAnswerService.questionPages;
        console.log('Questions: ');
        console.log(this._questions);
        console.log('Questions: ');
        console.log(this._questionPages);
    }
     
    // Catches ClientAnswer change events from subcomponents and calls store update action from clientAnswersService.
    onAnswerToStore(ca: ClientAnswer) {
       this.clientAnswerService.updateAnswer(ca);
    }
}