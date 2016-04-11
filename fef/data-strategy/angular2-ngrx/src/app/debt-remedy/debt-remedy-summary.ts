import { Component } from 'angular2/core';

import { DebtRemedySummaryController } from '../../shared/debt-remedy/controllers/debt-remedy-summary-controller'

import { DebtRemedyQuestionPage } from './debt-remedy-question-page'
import { InCategory } from '../../shared/pipes/in-category';

// Renders a heading for each data item question category;
// Clicking the heading makes the associated page of questions visible
@Component({
  selector: 'debt-remedy-summary',
  directives: [DebtRemedyQuestionPage],
  inputs: ['questions', 'questionPages'],
  outputs: ['onAnswerToContainer'],
  pipes: [InCategory],
  styles: [`
    .nav {
        font-family: Corbel,Arial,Helvetica;
        font-size: 24px;
        font-weight: normal;
        color: #8c6199;
        padding: 10px 16px 10px 16px!important;
        margin: 0 auto;
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 20px;
        clear: both;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        flex-direction: row;
    }
    
    .leftNav {
        width: 30px;
        text-align: left;
        -webkit-order: 1;
           order: 1;
        -webkit-flex: 1 1 0; 
           flex: 1 1 0; 
    }
    
    .pageTitle {
        text-align: center;
        justify-content: space-between;
        -webkit-order: 2;
           order: 2;
        -webkit-flex: 3 3 0; 
           flex: 3 3 0; 
    }
    
    .rightNav {
        width: 30px;
        text-align: right;
        -webkit-order: 3;
           order: 3;
        -webkit-flex: 1 1 0; 
           flex: 1 1 0; 
    }
    
    .pageBlurb {
        margin: 0 auto;
        padding: 0.25em 0.625em;
        margin-bottom: 10px;
        clear: both;
        
        font-family: Arial,Helvetica,Sans-Serif;
        font-size: 15px;
        color: #4d4d4d;
    }
  
    .wrap {
        font-family: Corbel,Arial,Helvetica;
        font-size: 20px;
        font-weight: normal;
        background-color: #f7f8fa;
        color: #8c6199;
        padding: 10px 16px 10px 16px!important;
        margin: 0 auto;
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 20px;
        clear: both;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        flex-direction: row;
    }
    
    .categoryArrow {
        width: 30px;
        -webkit-order: 1;
           order: 1;
    }
    
    .categoryPadding {
        width: 20px;
        -webkit-order: 2;
           order: 2;
    }
    
    .categoryHeader {
        -webkit-order: 3;
           order: 3;
    }
    
  `],
  template: `
    <div class="nav">
        <div class="leftNav" (click)="changePageBackwards()">&#9668;</div>
        <div class="pageTitle">{{questionPages[questionPageIndex].pageTitle}}</div>
        <div class="rightNav" (click)="changePageForwards()">&#9658;</div>
    </div>
    <div class="pageBlurb">{{questionPages[questionPageIndex].pageBlurb}}</div>
    <div *ngFor="#category of questionPages[questionPageIndex].categories">
        <div class="wrap" (click)="showHideCategory(category.itemCategory)">
            <div class="categoryArrow" [hidden]="activeCategory !== category.itemCategory">
                &#x25B2;
            </div>
            <div class="categoryArrow" [hidden]="activeCategory == category.itemCategory">
                &#x25BC;
            </div>
            <div class="categoryPadding">
            </div>
            <div class="categoryHeader">
                {{category.categoryTitle}}
            </div>
        </div>
        <debt-remedy-question-page [hidden]="activeCategory !== category.itemCategory" [questions]="questions | inCategory:category.itemCategory" (onAnswerToSummary)="onAnswerPassed($event)"></debt-remedy-question-page>
    <div>

  `,
})
export class DebtRemedySummary extends DebtRemedySummaryController {
    
  constructor() {
      super();
  }
  
}
