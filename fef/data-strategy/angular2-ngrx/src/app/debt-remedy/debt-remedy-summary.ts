import { Component } from 'angular2/core';

import { DebtRemedySummaryController } from '../../shared/debt-remedy/controllers/debt-remedy-summary-controller'

import { DebtRemedyQuestionPage } from './debt-remedy-question-page'
import { InCategory } from '../../shared/pipes/in-category';

@Component({
  selector: 'debt-remedy-summary',
  directives: [DebtRemedyQuestionPage],
  inputs: ['clientAnswers'],
  outputs: ['onAnswerToContainer'],
  pipes: [InCategory],
  styles: [`
    .wrap {
        max-width: 50em;
        margin: 0 auto;
        padding: 0.25em 0.625em;
        background-color: orange;
        margin-bottom: 20px;
        clear: both;
  }
  `],
  template: `
    <div *ngFor="#questionPage of _questionPages">
        <div class="wrap" (click)="showPage(questionPage.pageRef)">{{questionPage.title}}</div>
        <debt-remedy-question-page [hidden]="activePageRef !== questionPage.pageRef" [clientAnswers]="clientAnswers | inCategory:questionPage.itemCategory" (onAnswerToSummary)="onAnswerPassed($event)"></debt-remedy-question-page>
    <div>

  `,
})
export class DebtRemedySummary extends DebtRemedySummaryController {
    
  activePageRef: string = null;  
    
  constructor() {
      super();
  }
  
  showPage(pageRef: string) {
      this.activePageRef = pageRef;
  }
}
