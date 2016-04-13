import { Component } from 'angular2/core';

import { DebtRemedyQuestionPageController } from '../../shared/debt-remedy/controllers/debt-remedy-question-page-controller';

import { DataItemEntry } from './data-item-entry';

// Contains all data item questions for a given category
@Component({
  selector: 'debt-remedy-question-page',
  directives: [DataItemEntry],
  inputs: ['questions'],
  outputs: ['onAnswerToSummary'],
  template: `
    <div *ngFor="#question of questions">
        <data-item-entry [question]="question" (onAnswerToQuestionPage)="onAnswerPassed($event)"></data-item-entry>
    </div>
  `,
})
export class DebtRemedyQuestionPage extends DebtRemedyQuestionPageController {
    
  constructor() {
      super();
  }
}
