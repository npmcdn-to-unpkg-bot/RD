import { Component } from 'angular2/core';

import { DebtRemedyStartController} from '../../shared/debt-remedy/controllers/debt-remedy-start-controller';

import { ClientAnswerService } from '../../shared/services/client-answer-service';

import { DebtRemedyLogo } from '../../shared/debt-remedy/debt-remedy-logo';
import { DebtRemedySummary } from './debt-remedy-summary';

// The 'smart' component that interacts with the store via the ClientAnswerService:
// Receives events from subcomponents -> calls method on ClientAnswerService to save to store
// Recovers information from store to pass down to 'dumb' components
@Component({
  directives: [DebtRemedyLogo, DebtRemedySummary],
  styles: [`
    .answersPanel {
        text-align: center;
        border-top: solid 1px #d5dde1;
        border-left: solid 1px #d5dde1;
        border-right: solid 1px #d5dde1;
        border-bottom: solid 1px #d5dde1
    }
  `],
  template: `
    <div class="answersPanel">
        <debt-remedy-logo style="margin: auto"></debt-remedy-logo>
        <debt-remedy-summary [questions]="_questions | async" [questionPages]="_questionPages | async" (onAnswerToContainer)="onAnswerToStore($event)"></debt-remedy-summary>
    </div>
  `,
})
export class DebtRemedyStart extends DebtRemedyStartController {
  
  
  constructor(clientAnswerService: ClientAnswerService) {
       super(clientAnswerService);
   }
        
   
}
