import { Injectable } from 'angular2/core';

import { clientAnswers, questions, questionPages } from '../reducers/debt-remedy-store-reducers';

import { createStore, combineReducers } from 'redux';

// Create store to be boostrapped in main.browser.ts
// This will need to be injected into the ClientService, so it makes sense to create it in a separate class.
// @ngrx/store streamlines this process a little, as just including 'provideStore([reducers]) in the bootstrap
//  will set up the store which you can inject with @ngrx/store's 'store' property.
@Injectable()
export class Store {
    
    DRStore: any;
    
    constructor() {
        // Implement Chrome Redux DevTools integration with store
        // combineReducers method combines store state described by each reducer into a single state object.
        // This can be replicated in @ngrx/store by assigning an interface to the Store (which is a generic)
        this.DRStore = (window.devToolsExtension ? window.devToolsExtension()(createStore): createStore)(combineReducers({
            clientAnswers,
            questions,
            questionPages
        }));
    }
    
}