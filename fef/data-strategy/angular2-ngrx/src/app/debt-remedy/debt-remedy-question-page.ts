import { Component } from 'angular2/core';

import { DebtRemedyQuestionPageController } from '../../shared/debt-remedy/controllers/debt-remedy-question-page-controller';

import { DataItemEntry } from './data-item-entry';

@Component({
  selector: 'debt-remedy-question-page',
  directives: [DataItemEntry],
  inputs: ['clientAnswers'],
  outputs: ['onAnswerToSummary'],
  template: `
    <div *ngFor="#clientAnswer of clientAnswers">
        <data-item-entry [clientAnswer]="clientAnswer" (onAnswerToQuestionPage)="onAnswerPassed($event)"></data-item-entry>
    </div>
  `,
})
export class DebtRemedyQuestionPage extends DebtRemedyQuestionPageController {
    
  constructor() {
      super();
  }
}
