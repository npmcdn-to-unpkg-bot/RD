import { Injectable } from 'angular2/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '../store/debt-remedy-store-redux';

import { questionData } from '../models/question-data';
import { questionPageData } from '../models/question-page-data';
import { ClientAnswer } from '../models/client-answer';
import { Question } from '../models/question';
import { QuestionPage } from '../models/question-page';

@Injectable()
export class ClientAnswerServiceRedux {
    
    clientAnswers: Array<ClientAnswer>;
    questions: Array<Question>;
    questionPages: Array<QuestionPage>;
    

    constructor(private store: Store) {
        // Gather raw data for the various QuestionPages and Questions, before sending them to the store
        //  to be added to the state.
        // The state for these objects are then held in the service as observable arrays.
        // Though the Store is not an Observable, it has a 'subscribe' method that is called every time
        //  an action is dispatched to it.
        // I am using it here to hold current store state (via getState() method) in this service when the
        //  store is populated with QuestionPages/Questions or the ClientAnswers change.
        // ngrx contains the 'store.select('[reducer]') method which makes accessing the store less verbose.
        this.loadQuestionPages();
        let questionPagesSub = store.DRStore.subscribe(() => {
           this.questionPages = store.DRStore.getState().questionPages; 
        });
        this.loadQuestions();
        let questionsSub = store.DRStore.subscribe(() => {
           this.questions = store.DRStore.getState().questions; 
        });
        // State for ClientAnswers is generated last, as it is dependent on the questions - a ClientAnswer
        //  state object is generated for each Question.
        this.loadAnswers();
        let clientAnswersSub = store.DRStore.subscribe(() => {
           this.clientAnswers = store.DRStore.getState().clientAnswers; 
        });
    }
    
    // initialize store state; get all questions from models/data-items and create a blank answer in state
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
        
        this.store.DRStore.dispatch({type: 'ADD_QUESTION_PAGES', payload: _questionPages});
        
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
        
        this.store.DRStore.dispatch({type: 'ADD_QUESTIONS', payload: _questions});
        
    }
    
    // Generates an array of ClientAnswers from Question items currently in store
    // Dispatches an action to store that populates it with a blank answer for every Question. 
    loadAnswers() {
        
        let _questions = Array<Question>();
        // getState() method allows for current state to be captured and placed into a non-Observable array
        // store.select() returns an observable so not suitable here
        _questions = this.store.DRStore.getState().questions;
        let _clientAnswers = new Array<ClientAnswer>();
        
        for(let question of _questions) {
            let _ca = new ClientAnswer();
            _ca.itemCode = question.itemCode;
            _ca.answerCode = null;
            _ca.answerFreq = null;
            _clientAnswers.push(_ca);
        }
        this.store.DRStore.dispatch({type: 'ADD_ANSWERS', payload: _clientAnswers});
    }
    
    // Updates a single ClientAnswer item in the store; called by the DebtRemedyStart component when
    // a change event 'bubbles' up to it from subcomponents.
    updateAnswer(ca: ClientAnswer) {
        this.store.DRStore.dispatch({type: 'UPDATE_ANSWER', payload: ca});
    }
}
