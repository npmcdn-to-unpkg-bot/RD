import { EventEmitter, Input, OnInit } from 'angular2/core';

import { ClientAnswer } from '../../models/client-answer';
import { QuestionPage } from '../../models/question-page';
import { questionPageData } from '../../models/question-page-data';

export class DebtRemedySummaryController implements OnInit {
    
    @Input() questionPages: Array<QuestionPage>;
    onAnswerToContainer: EventEmitter<ClientAnswer> = new EventEmitter<ClientAnswer>();
    
    questionPageIndex: number;
    activeCategory: string = null;
    
    constructor() {
    }
    
    ngOnInit() {
        this.questionPageIndex = 0;
    }
    
    // Conduit for ClientAnswer change event from subcomponents; event is handled by parent component.
    onAnswerPassed(ca: ClientAnswer) {
        this.onAnswerToContainer.emit(ca);
    }
    
    // View next page of questions.
    // Each item in the input 'questionPages' array contains a number of 'categories' in a subarray.
    // If a Question item belongs to one of these categories, it will be rendered within that page.
    // If we increment the index of the questionPages array a new set of categories/Questions will be rendered.
    changePageForwards() {
        // Don't increment index past last item in array
        if(this.questionPageIndex < this.questionPages.length - 1)
        {
            this.questionPageIndex = this.questionPageIndex + 1;
        }
    }
    
    changePageBackwards() {
        // Don't set negative array index
        if(this.questionPageIndex > 0)
        {
            this.questionPageIndex = this.questionPageIndex - 1;
        }
    }
    
    showHideCategory(catRef: string) {
      if (this.activeCategory == catRef) {
          this.activeCategory = null;
      }
      else {
        this.activeCategory = catRef;
      }
  }   
    
}