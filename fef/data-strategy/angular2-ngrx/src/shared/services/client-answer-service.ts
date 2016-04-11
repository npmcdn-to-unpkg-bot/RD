import { Injectable } from 'angular2/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import { DRStore } from '../store/debt-remedy-store';

import { questionData } from '../models/question-data';
import { questionPageData } from '../models/question-page-data';
import { ClientAnswer } from '../models/client-answer';
import { Question } from '../models/question';
import { QuestionPage } from '../models/question-page';

@Injectable()
export class ClientAnswerService {
    
    clientAnswers: Observable<Array<ClientAnswer>>;
    questions: Observable<Array<Question>>;
    questionPages: Observable<Array<QuestionPage>>;
    
    // @ngrx/store's store.select method returns an observable with our collection of clientAnswers in it
    // This means we don't have to manually subscribe to the store as we do with 'plain' Redux
    constructor(private store: Store<DRStore>) {
        // Gather raw data for the various QuestionPages and Questions, before sending them to the store
        //  to be added to the state.
        // The state for these objects are then held in the service as observable arrays.
        this.loadQuestionPages();
        this.questionPages = this.store.select('questionPages');
        this.loadQuestions();
        this.questions = this.store.select('questions');
        // State for ClientAnswers is generated last, as it is dependent on the questions - a ClientAnswer
        //  state object is generated for each Question.
        this.loadAnswers();
        this.clientAnswers = this.store.select('clientAnswers');
    }
    
    // Generates an array of QuestionPages from array in models/question-page-data (represents an API call)
    // Dispatches an action to store that populates it with these items.
    loadQuestionPages() {
        
        let _questionPageDataItems = questionPageData;
        let _questionPages = new Array<QuestionPage>();
        
        for(let qpdi of _questionPageDataItems) {
           let _questionPage = new QuestionPage();
            _questionPage.pageRef = qpdi.pageRef;
            _questionPage.pageTitle = qpdi.pageTitle;
            _questionPage.pageBlurb = qpdi.pageBlurb;
            _questionPage.categories = qpdi.categories;
            _questionPages.push(_questionPage);
        }
        
        this.store.dispatch({type: 'ADD_QUESTION_PAGES', payload: _questionPages});
        
    }
    
    // Generates an array of Questions from array in models/question-data (represents an API call)
    // Dispatches an action to store that populates it with these items.
    loadQuestions() {
        
        let _questionDataItems = questionData;
        let _questions = new Array<Question>();
        
        for(let qdi of _questionDataItems) {
            let _question = new Question();
            _question.itemCode = qdi.itemCode;
            _question.itemCategory = qdi.itemCategory;
            _question.questionText = qdi.questionText;
            _question.itemType = qdi.itemType;
            _question.questionAnswers = qdi.questionAnswers;
            _questions.push(_question);
        }
        
        this.store.dispatch({type: 'ADD_QUESTIONS', payload: _questions});
        
    }
    
    // Generates an array of ClientAnswers from Question items currently in store
    // Dispatches an action to store that populates it with a blank answer for every Question. 
    loadAnswers() {
        
        let _questions = Array<Question>();
        // getState() method allows for current state to be captured and placed into a non-Observable array
        // store.select() returns an observable so not suitable here
        _questions = this.store.getState().questions;
        let _clientAnswers = new Array<ClientAnswer>();
        
        for(let question of _questions) {
            let _ca = new ClientAnswer();
            _ca.itemCode = question.itemCode;
            _ca.answerCode = null;
            _ca.answerFreq = null;
            _clientAnswers.push(_ca);
        }
        this.store.dispatch({type: 'ADD_ANSWERS', payload: _clientAnswers});
    }
    
    // Updates a single ClientAnswer item in the store; called by the DebtRemedyStart component when
    // a change event 'bubbles' up to it from subcomponents.
    updateAnswer(ca: ClientAnswer) {
        this.store.dispatch({type: 'UPDATE_ANSWER', payload: ca});
    }
}
