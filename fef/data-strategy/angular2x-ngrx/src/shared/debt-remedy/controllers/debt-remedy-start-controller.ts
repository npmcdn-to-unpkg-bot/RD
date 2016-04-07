import { Observable } from 'rxjs/Observable';

import { ClientAnswerService } from '../../services/client-answer-service';

import { ClientAnswer } from '../../models/client-answer';

export class DebtRemedyStartController {
    
    _clientAnswers: Observable<Array<ClientAnswer>>;
    
    constructor(private clientAnswerService: ClientAnswerService) {
        this._clientAnswers = clientAnswerService.clientAnswers;
        clientAnswerService.loadItems();
     }
     
     onAnswerToStore(ca: ClientAnswer) {
        this.clientAnswerService.updateItem(ca);
     }
}