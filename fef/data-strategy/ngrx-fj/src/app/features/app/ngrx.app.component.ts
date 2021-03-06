import { Component, ChangeDetectionStrategy } from 'angular2/core';
import { STRATEGY } from "../../infrastructure/models/config";

// NGRX
import { Store } from "@ngrx/store";
import { MyNgStore } from "../../infrastructure/stores/my-rx-store";
import { Devtools, instrumentStore } from "@ngrx/devtools";
import { Observable } from 'rxjs/Observable';

import { addProduct, updateCategoryChain, removeProduct } from "../../infrastructure/actions/product-actions";
import { addPurchase, removePurchase } from "../../infrastructure/actions/purchase-actions";
import { toggleVat } from "../../infrastructure/actions/ui-state-actions";

import { ProductLine } from "../../shared/components/product-line";
import { Basket } from "../../shared/components/basket";
import { Product } from "../../infrastructure/models/product";
import { Purchase } from "../../infrastructure/models/purchase";
import { UiState } from "../../infrastructure/models/ui-state";
import { Copyright } from "../../shared/components/copyright";
import { ProductDetail } from "../../shared/components/product-detail";
import { Modal } from "../../shared/components/modal";

import { runTests } from "../../infrastructure/helpers/ditto-tests";

@Component({
	selector: 'ngrx-app',
	changeDetection: STRATEGY,
	directives: [ProductLine, Basket, Copyright, ProductDetail, Modal, Devtools],
	styles: [`
		.title {
			float: left;
		}
	`],	
	template: `
		<h2 class="title">My Ngrx Flux Shop) </h2>
	
		<basket 
			[items]="_basket | async" 
			[includeVat]="(_uiState|async).showVAT"
			(includeTax)="vatChange($event)">
		</basket>
		<div class="clear"></div>
		
		<ul>
			<li *ngFor="#prod of _products | async">
				<product-line 
					[product]="prod"
					[includeTax]="(_uiState|async).showVAT"
					(onBuy)="onBuy($event)"
					(onEdit)="onEdit($event)"
					(onDelete)="onDelete($event)">
				</product-line>
				
			</li>
		</ul>
		<div class="clear"></div>
		<button (click)="onAddNew()">Add Product</button>
		
		<copyright>StepChange Debt Charity</copyright>
		<hr />
		<ngrx-devtools style="opacity: 0.75"></ngrx-devtools>
	`
})
export class NgrxApp {
	private title: string;
	_myNgStore: Store<MyNgStore> = null;
	_products: Observable<Array<Product>> = null;
	_basket: Observable<Array<Purchase>> = null;
	_uiState: Observable<UiState> = null;
	
	constructor(myStore: Store<MyNgStore>) {
		this._myNgStore = myStore;
		this._products = this._myNgStore.select("products");
		this._basket = this._myNgStore.select("basket");
		this._uiState = this._myNgStore.select("uiState");

		this._uiState.subscribe((x) => {
			console.log(x.showVAT);
		});
		
		//runTests();
	}
	
	vatChange(isChecked: boolean) {
		this._myNgStore.dispatch(toggleVat());
	}
	
	onBuy(product: Product) {
		this._myNgStore.dispatch(addPurchase(product.sku, 1, product.price));
	}
	
	onAddNew() {
		let p: Product = Product.MockProduct();
		
		this._myNgStore.dispatch(addProduct(
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
		
		this._myNgStore.dispatch(updateCategoryChain(p.sku, rev));
	}
	
	onDelete(prod: Product): void {
		this._myNgStore.dispatch(removeProduct(prod.sku));
	}	

}
