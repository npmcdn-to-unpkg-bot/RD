import { Component, EventEmitter, Input, Output } from 'angular2/core';
import { ChangeDetectionStrategy } from "angular2/core";
import { STRATEGY } from "../../infrastructure/models/config";
import { FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, Control } from "angular2/common";
import { Product } from "../../infrastructure/models/product";

@Component({
	selector: 'basket',
	directives: [FORM_DIRECTIVES],
	changeDetection: STRATEGY,
	styles: [`
		:host {
			float: right;
			width: 30%;
			background-color: #FFFFD9;
			border: solid 1px yellow;
			text-align: right;
			margin-bottom: 1em;
		}
		:host::after {
			clear: both;
		}
		.caption {
			margin-bottom: 0.5em;
			font-weight: bold;
		}
		.totals {
			text-align: right;
		}
	`],
	template: 
	`
		<div class="caption">
			<label>
				VAT in basket?
				<input type="checkbox" [(ngModel)]="includeVat" (change)="onVATchange($event)" />
			</label>
		</div>
		
		<p class="totals">
			&pound;{{getTotal()}} 
			for 
			{{getItemCount()}} items
		</p>
	`
})

export class Basket {
	@Input() items: Array<Product> = new Array<Product>();
	@Input() includeVat: boolean;
	@Output() includeTax: EventEmitter<boolean> = new EventEmitter<boolean>();
	
	constructor() {
	}

	getItemCount(): number {
		return this.items.length;
	}
	
	getTotal(): number {
		let total: number = 0;
		
		this.items.forEach( (p: Product) => {
			total += p.price;
		});
		
		if (this.includeVat) {
			total = (total * 1.2);
		}
		
		return total;
	}

	onVATchange(incVATEvt: any) {
		let incTax = incVATEvt.target.checked;
		
		this.includeTax.emit( incTax );		
	}
	
}
