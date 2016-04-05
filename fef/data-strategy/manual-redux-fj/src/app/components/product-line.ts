/// <reference path="../../references.ts" />

import { Component, EventEmitter, Input, Output, Injector } from 'angular2/core';
import { ChangeDetectionStrategy } from "angular2/core";
import { STRATEGY } from "../config";
import { FORM_DIRECTIVES } from "angular2/common";
import { CategoryChain } from "./category-chain";
import { Product } from "../models/product";


@Component({
	selector: 'product-line',
	directives: [FORM_DIRECTIVES, CategoryChain],
	changeDetection: STRATEGY,
	styles: [`
		.root-container {
			font-family: "Corbel", "Arial";
			border: solid 1px #ddd;
			padding: 0.5em;
		}
		.no-gaps {
			/* Because this doesn't work on "P" tags :-() */
			margin: 0; padding: 0;
		}
		.detail-container {
			float: left;
			margin-left: 1em;
		}
		.image {
			border: solid 1px #000;	
			float: left;		
		}
		.sku {
		}
		.sku-code {
		}
		.name {
			font-weight: bold;
		}
		.price {
			float: right;
			font-size: xx-large;
			font-weight: bold;
			font-family: "Arial";
			margin-top: 0.5em;
		}		
		.clear {
			clear: both;
		}
	`],
	template:
	`
		<div class="root-container">

			<img class="image" width="64" height="64" [attr.src]="product.imageUrl" />
			
			<div class="detail-container">
				<p class="sku no-gaps">
					<button (click)="onEditClick()">Edit</button>
					SKU # <span class="sku-code no-gaps">{{product.sku}}</span>				
					<button (click)="onDeleteClick()">Delete</button>	
				</p>
				
				<p class="name no-gaps">
					{{product.name}}
				</p>
				
				<category-chain [chain]='product.categoryChain'></category-chain>
				
			</div>
			
			<p class="price no-gaps">
				&pound; {{calculatePrice()}}
				<br/>
				<button class="fr" (click)="onBuyClick()">Buy!</button>
			</p>

			<div class="clear"></div>		
		</div>
	`
})

export class ProductLine {
	@Input() product: Product = null;
	@Input() includeTax: boolean = false;
	@Output() onBuy: EventEmitter<Product>;
	@Output() onEdit: EventEmitter<Product>;
	@Output() onDelete: EventEmitter<Product>;

	constructor() {
		this.onBuy = new EventEmitter<Product>();
		this.onEdit = new EventEmitter<Product>();
		this.onDelete = new EventEmitter<Product>();
	}
	
	onBuyClick() {
		this.onBuy.emit(this.product);
	}
	
	onEditClick() {
		this.onEdit.emit(this.product);
	}
	
	onDeleteClick() {
		this.onDelete.emit(this.product);
	}
	
	calculatePrice() {
		let total = this.product.price;
		
		if (this.includeTax) {
			total = (this.product.price * 1.2);
		}
		 		
		return total;
	}
	
}
