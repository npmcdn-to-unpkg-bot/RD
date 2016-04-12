import { Component, ChangeDetectionStrategy } from 'angular2/core';
import { STRATEGY } from "../../infrastructure/models/config";

import { MyReduxStore } from "../../infrastructure/stores/my-redux-store";
import { addProduct, updateCategoryChain, removeProduct } from "../../infrastructure/actions/product-actions";
import { addPurchase, removePurchase } from "../../infrastructure/actions/purchase-actions";
import { toggleVat } from "../../infrastructure/actions/ui-state-actions";

import { ProductLine } from "../../shared/components/product-line";
import { Basket } from "../../shared/components/basket";
import { Product } from "../../infrastructure/models/product";
import { Copyright } from "../../shared/components/copyright";
import { ProductDetail } from "../../shared/components/product-detail";
import { Modal } from "../../shared/components/modal";

@Component({
	selector: 'redux-app',
	changeDetection: STRATEGY,
	directives: [ProductLine, Basket, Copyright, ProductDetail, Modal],
	styles: [`
		.title {
			float: left;
		}
	`],	
	template: `
		<h2 class="title">My Redux Flux Shop</h2>
	
		<basket 
			[items]="_myReduxStore.basket" 
			[includeVat]="_myReduxStore.getState().uiState.showVAT"
			(includeTax)="vatChange($event)">
		</basket>
		<div class="clear"></div>
		
		<ul>
			<li *ngFor="#prod of _myReduxStore.products">
				<product-line 
					[product]="prod"
					[includeTax]="_myReduxStore.getState().uiState.showVAT"
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
export class ReduxApp {
	private title: string;
	_myReduxStore: MyReduxStore = null;
	
	constructor(myStore: MyReduxStore) {
		this._myReduxStore = myStore;
	}

	vatChange(isChecked: boolean) {
		this._myReduxStore.dispatch(toggleVat());
	}
	
	onBuy(product: Product) {
		this._myReduxStore.dispatch(addPurchase(product.sku, 1, product.price));
	}
	
	onAddNew() {
		let p: Product = Product.MockProduct();
		
		this._myReduxStore.dispatch(addProduct(
			p.sku, p.name, p.imageUrl, p.categoryChain, p.price
		));
		
	}
	
	onEdit(p: Product): void {
		// Just mimic and edit by flipping the category chain elements around
		let arrChain: Array<string> = p.categoryChain.split(",");
		
		let rev = "";
		let tmp: Array<string> = new Array<string>();
		p.categoryChain.split(",")
		for (let i: number = arrChain.length-1; i >= 0; i--) {
			tmp.push(arrChain[i]);			
		}
		rev = tmp.join(",");
		
		this._myReduxStore.dispatch(updateCategoryChain(p.sku, rev));
	}
	
	onDelete(prod: Product): void {
		this._myReduxStore.dispatch(removeProduct(prod.sku));
	}	

}
