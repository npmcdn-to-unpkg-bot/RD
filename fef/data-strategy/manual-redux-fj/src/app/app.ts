/// <reference path="../references.ts" />

import { Component, EventEmitter, Input, Output, Injector, Inject, OnInit } from 'angular2/core';
import { ChangeDetectionStrategy } from "angular2/core";
import { ProductLine } from "./components/product-line";
import { Basket } from "./components/basket";
import { Product } from "./models/product";
import { Copyright } from "./components/copyright";
import { ProductDetail } from "./components/product-detail";
import { Modal } from "./components/modal";
import { AppStore, UiState, AppState } from "./stores/app-store";
import { Action, Actions } from "./stores/actions";

@Component({
	selector: 'app',
	directives: [ProductLine, Basket, Copyright, ProductDetail, Modal],
	styles: [`
		.title {
			float: left;
		}
	`],
	template:
	`
		<h2 class="title">My Manual Flux Inspired Shop</h2>
	
		<basket 
			[items]="_appStore.appState.basket" 
			[includeVat]="_appStore.uiState.includeTax"
			(includeTax)="vatChange($event)">
		</basket>
		<div class="clear"></div>
		
		<ul>
			<li *ngFor="#prod of _appStore.appState.catalog">
				<product-line 
					[product]="prod"
					[includeTax]="_appStore.uiState.includeTax"
					(onBuy)="onBuy($event)"
					(onEdit)="onEdit($event)"
					(onDelete)="onDelete($event)">
				</product-line>
				
			</li>
		</ul>
		<div class="clear"></div>
		<button (click)="onAddNew()">Add Product</button>
		
		<copyright>StepChange Debt Charity</copyright>
	`
})

export class App implements OnInit {
	_appStore: AppStore = null;
	
	constructor(appStore: AppStore) {
		this._appStore = appStore;
	}
	
	ngOnInit() {
	}
	
	vatChange(isChecked) {
		this._appStore.instruct(Actions.TOGGLE_SHOW_VAT);
	}
	
	onBuy(product) {
		
		this._appStore.dispatch(Actions.BUY_PRODUCT, product);
	}
	
	onAddNew() {
		let p: Product = Product.MockProduct();

		this._appStore.dispatch(Actions.ADD_PRODUCT, p);
	}
	
	onEdit(prod: Product): void {
		// Just mimic and edit by flipping the category chain elements around
		prod.categoryChain = prod.categoryChain.reverse();
		
		this._appStore.dispatch(Actions.EDIT_PRODUCT, prod);
	}
	
	onDelete(prod: Product): void {
		this._appStore.dispatch(Actions.DELETE_PRODUCT, prod);
	}
	

}
