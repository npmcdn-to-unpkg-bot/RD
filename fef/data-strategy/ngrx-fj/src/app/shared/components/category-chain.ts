import { Component, EventEmitter, Input, Output } from 'angular2/core';
import { ChangeDetectionStrategy } from "angular2/core";
import { STRATEGY } from "../../infrastructure/models/config";
import { FORM_DIRECTIVES } from "angular2/common";

@Component({
	selector: 'category-chain', 
	directives: [FORM_DIRECTIVES],
	changeDetection: STRATEGY,
	styles: [`
		.category-chain {
			padding: 0; margin: 0;
		}
		.category-chain-item {
			padding: 0; margin: 0;
			float: left;
			list-style-type: none;
			margin-right: 0.25em;			
		}
	`],
	template:
	`
		<ol class="category-chain">
			<li *ngFor="#cci of arrayify(chain), #i=index, #l=last" class="category-chain-item">
				{{cci}} {{ (l) ? "" : ">" }}
			</li>
		</ol>
	`
})

export class CategoryChain {
		// <ol class="category-chain">
		// 	<li *ngFor="#cci of chain, #i=index" class="category-chain-item">
		// 		{{cci}} {{ (isLastItem(i)) ? "" : ">" }}
		// 	</li>
		// </ol>

	// ARRAY VERSION
	// @Input() chain: Array<string> = null;

	// isLastItem(currIndex: number) {
	// 	let isLast: boolean = false;
		
	// 	isLast = (currIndex === this.chain.length-1);
		
	// 	return isLast;
	// }
	
	@Input() chain: string = "";
	
	arrayify(chain: string): Array<string> {
		if (chain == null)
			return [];
		return chain.split(",").map((value: string) => value.trim() );
	}

}

