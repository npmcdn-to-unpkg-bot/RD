import { Injectable } from 'angular2/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import { DRStore } from '../store/debt-remedy-store';

import { dataItems } from '../models/data-items';
import { ClientAnswer } from '../models/client-answer';

@Injectable()
export class ClientAnswerService {
    
    clientAnswers: Observable<Array<ClientAnswer>>;
    
    // store.select method returns an observable with our collection of clientAnswers in it
    constructor(private store: Store<DRStore>) {
        this.clientAnswers = store.select('clientAnswers');
    }
    
    loadItems() {
        let _dataItems = dataItems;
        let _clientAnswers = new Array<ClientAnswer>();
        
        for(let di of _dataItems) {
            let _ca = new ClientAnswer();
            _ca.itemCode = di.itemCode;
            _ca.answerCode = null;
            _ca.answerFreq = null;
            _clientAnswers.push(_ca);
        }
        
        this.store.dispatch({type: 'ADD_ITEMS', payload: _clientAnswers});
    }
    
    updateItem(ca: ClientAnswer) {
        this.store.dispatch({type: 'UPDATE_ITEM', payload: ca});
    }
}
