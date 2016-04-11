import { ClientAnswer } from '../models/client-answer';

// Reducer for acting on list of client answers (e.g. initializing, adding)
export const clientAnswers = (state: any = [], {type, payload}) => {
    switch(type) {
        case 'ADD_ANSWERS':
            return payload;
        case 'UPDATE_ANSWER':
            return state.map(ca => clientAnswer(ca, {type, payload}));
        default: return state;
    }
}

// Subreducer for working on single answers (separating concerns)
export const clientAnswer = (state: any = null, {type, payload}) => {
    switch(type) {
        case 'UPDATE_ANSWER':
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

export const questions = (state: any = [], {type, payload}) => {
    switch(type) {
        case 'ADD_QUESTIONS':
            return payload;
        default: return state;
    }
}

export const questionPages = (state: any = [], {type, payload}) => {
    switch(type) {
        case 'ADD_QUESTION_PAGES':
            return payload;
        default: return state;
    }
}