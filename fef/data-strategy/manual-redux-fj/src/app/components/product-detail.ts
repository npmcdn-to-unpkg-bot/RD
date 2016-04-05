/// <reference path="../../references.ts" />
import { Component, EventEmitter, Input, Output, OnInit } from 'angular2/core';
import { ChangeDetectionStrategy } from "angular2/core";
import { STRATEGY } from "../config";
import { Product } from "../models/product";

@Component({
	selector: 'product-detail', 
	changeDetection: STRATEGY,
	directives: [],
	styles: [`
		li label {
			width: 150px;	
			margin-right: 20px;
			display: inline-block;
			text-align: right;
		}
		
	`],
	template:
`
		<ul class="form" *ngIf="prod">
			<li>
				<label for="sku">SKU:</label>
				<input type="text" [(ngModel)]="prod.sku" [disabled]="_canEditSku" id="sku" />
			</li>

			<li>
				<label for="name">Product Name:</label>
				<input type="text" [(ngModel)]="prod.name" id="name" />
			</li>

			<li>
				<label for="imageUrl">Product Image URL:</label>
				<input type="text" [(ngModel)]="prod.imageUrl" id="imageUrl" />
			</li>
			
			<li>
				<label for="cats">Categories:</label>
				<input type="text" [(ngModel)]="prod.categoryChain" id="cats" />
			</li>
			
			<li>
				<label for="price">Price:</label>
				<input type="number" [(ngModel)]="prod.price" id="price" />
			</li>
			
		</ul>
`,
})

export class ProductDetail implements OnInit {
	@Input() prod: Product;
	// editMode "true"  => editing, cannot edit SKU
	// editMode "false" => new item, can edit SKU 
	//@Input() editMode: boolean = true;
// @Output() someOutput: EventEmitter = new EventEmitter();

	_canEditSku: boolean = false;

	constructor() {
		// To trigger the @Output emitter, use:
		// this.someOutput.emit({ some: data });
	}

	ngOnInit() {
		this._canEditSku = (
			this.prod 
			&& this.prod.sku 
			&& this.prod.sku === ""
		);
	}
	
	
}
