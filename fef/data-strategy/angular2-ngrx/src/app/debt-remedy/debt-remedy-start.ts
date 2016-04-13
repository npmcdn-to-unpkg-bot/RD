import { Component } from 'angular2/core';

import { DebtRemedyStartController} from '../../shared/debt-remedy/controllers/debt-remedy-start-controller';

// *****
// ngrx
// *****
import { ClientAnswerServiceNgrx } from '../../shared/services/client-answer-service-ngrx';

// *****
// redux
// *****
// import { ClientAnswerServiceRedux } from '../../shared/services/client-answer-service-redux';

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
        <!-- ***** ngrx ***** -->
        <!--- utilise async pipe when outputs are Observables -->
        <debt-remedy-summary [questions]="_questions | async" [questionPages]="_questionPages | async" (onAnswerToContainer)="onAnswerToStore($event)"></debt-remedy-summary>
        <!-- ***** redux ***** -->
        <!-- <debt-remedy-summary [questions]="_questions" [questionPages]="_questionPages" (onAnswerToContainer)="onAnswerToStore($event)"></debt-remedy-summary> -->
    </div>
  `,
})
export class DebtRemedyStart extends DebtRemedyStartController {
  
  // *****
  // ngrx
  // *****
  constructor(clientAnswerService: ClientAnswerServiceNgrx) {
       super(clientAnswerService);
   }
  
  // *****
  // redux
  // *****
  // constructor(clientAnswerService: ClientAnswerServiceRedux) {
  //      super(clientAnswerService);
  //  }
        
   
}
