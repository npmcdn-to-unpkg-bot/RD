import { Injectable } from 'angular2/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import { ClientAnswer } from '../models/client-answer';
import { dataItems } from '../models/data-items';

export interface DRStore {
    clientAnswers: ClientAnswer[];
    clientAnswer: ClientAnswer;
}

// Reducer for acting on list of answers
export const clientAnswers = (state: any = [], {type, payload}) => {
    switch(type) {
        case 'ADD_ITEMS':
            return payload;
        case 'UPDATE_ITEM':
            return state.map(ca => clientAnswer(ca, {type, payload}));
        default: return state;
    }
}

// Subreducer for working on single answers (separating concerns)
export const clientAnswer = (state: any = null, {type, payload}) => {
    switch(type) {
        case 'UPDATE_ITEM':
            if(state.itemCode !== payload.itemCode) {
                return state;
            }
            let _updatedCa = new ClientAnswer();
            _updatedCa.itemCode = state.itemCode;
            _updatedCa.answerCode = payload.answerCode;
            _updatedCa.answerFreq = payload.answerFreq;
            return _updatedCa;
        default: return state;
    }
}
