/// <reference path="../../references.ts" />

import { Component, EventEmitter, Input, Output } from 'angular2/core';
import { ChangeDetectionStrategy } from "angular2/core";
import { STRATEGY } from "../config";
import { FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, Control } from "angular2/common";
import { Product } from "../models/product";

@Component({
	selector: 'basket',
	directives: [FORM_DIRECTIVES],
	changeDetection: STRATEGY,
	styles: [`
		.basket { 
			background-color: #FFFFD9;
			border: solid 1px yellow;
			float: right;
			margin-bottom: 1em;
			display: block;
		}	
		.container {
		}		
		.clear {
			clear: both;
		}
		.caption {
			margin-bottom: 0.5em;
			font-weight: bold;
		}
	`],
	template: 
	`
		<div class="container basket">
			<fieldset>
				<caption><div class="caption">Basket</div></caption>
				
				<p class="totals">
					&pound;{{getTotal()}} 
					for 
					{{getItemCount()}} items
				</p>
				
				<label class=".include-vat">
					Include VAT?
					<input type="checkbox" (change)="onVATchange($event)" />
				</label>
			</fieldset>
		</div>
		<div class="clear"></div>
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

	onVATchange(incVATEvt) {
		let incTax = incVATEvt.target.checked;
		
		this.includeTax.emit( incTax );		
	}
	
}
