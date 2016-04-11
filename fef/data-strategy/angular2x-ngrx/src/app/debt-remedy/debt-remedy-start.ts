import { Component } from 'angular2/core';

import { DebtRemedyStartController} from '../../shared/debt-remedy/controllers/debt-remedy-start-controller';

import { ClientAnswerService } from '../../shared/services/client-answer-service';

import { DebtRemedyLogo } from '../../shared/debt-remedy/debt-remedy-logo';
import { DebtRemedySummary } from './debt-remedy-summary';

@Component({
  directives: [DebtRemedyLogo, DebtRemedySummary],
  template: `
    <div style="text-align: center">
        <debt-remedy-logo style="margin: auto"></debt-remedy-logo>
        <debt-remedy-summary [clientAnswers]="_clientAnswers | async" (onAnswerToContainer)="onAnswerToStore($event)"></debt-remedy-summary>
    </div>

  `,
})
export class DebtRemedyStart extends DebtRemedyStartController {
  
  
  constructor(clientAnswerService: ClientAnswerService) {
       super(clientAnswerService);
   }
        
   
}
