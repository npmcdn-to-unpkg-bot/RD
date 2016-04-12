import { ClientAnswer } from '../models/client-answer';
import { Question } from '../models/question';
import { QuestionPage } from '../models/question-page';

import { clientAnswers } from '../reducers/debt-remedy-store-reducers';

// @ngrx/store treats the store as a generic - as such we can define its 'shape' with an interface
// We can do something similar with 'plain' Redux library by using the combineReducers method.
export interface DRStore {
    clientAnswers: ClientAnswer[];
    questions: Question[];
    questionPages: QuestionPage[];
}
