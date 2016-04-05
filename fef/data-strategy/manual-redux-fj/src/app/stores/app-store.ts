import {Injectable} from "angular2/core";
import {Product} from "../models/product";
import {Action, Actions} from "./actions";

export class UiState {
	includeTax: boolean = false;
	actionInProgress: boolean = false;
}

export class AppState {
	catalog: Array<Product> = null;
	basket: Array<Product> = null;
	
	constructor() {
		this.catalog = new Array<Product>();
		this.basket = new Array<Product>();
	}
}

@Injectable()
export class AppStore {
	uiState: UiState = null;
	appState: AppState = null;
	
	constructor() {
		this.uiState = new UiState();
		this.appState = new AppState();
		this.appState.catalog = Product.createCatalog();
	}
	
	static __theStore: AppStore = null;
	static getStore(): AppStore {
		// Simple singleton
		if (AppStore.__theStore == null) {
			AppStore.__theStore = new AppStore();
		}
		return AppStore.__theStore;
	} 
	
	instruct(type: string): void {
		this.dispatch(type, null);
	}
	
	dispatch(type: string, payload: any): void {
		// poor mans redux
		switch (type) {			
			case Actions.ADD_PRODUCT:
				this.appState.catalog.push(payload);
			break;
			
			case Actions.DELETE_PRODUCT:
				this.appState.catalog = 
					this.appState.catalog
						.filter((p: Product) => 
							p.sku !== payload.sku
						);						
			break;
						
			case Actions.EDIT_PRODUCT:
				// force new instance
				let editingProd: Product = new Product(payload.sku, payload.name, payload.imageUrl, payload.categoryChain, payload.price);
				
				// remove existing one
				this.appState.catalog = this.appState.catalog.filter((p: Product) => p.sku !== payload.sku);
				
				// add new copy on the end
				this.appState.catalog.push(editingProd);
			break;
						
			case Actions.BUY_PRODUCT:
				// Emulate new array
				this.appState.basket = this.appState.basket.map((p) => p);
				this.appState.basket.push(payload);
			break;
			
			case Actions.TOGGLE_SHOW_VAT:
				this.uiState.includeTax = !this.uiState.includeTax;
			break;
		}
		
		// Just to keep things tidy!
		// ... (this sorts the existing array, you don't magically get a new one!)
		this.appState.catalog = Product.SortProducts(this.appState.catalog);
	}
	
	
	
	// catalogReducer(state: Array<Product>, action: Action): Array<Product> {
	// 	let currStore: AppStore = AppStore.getStore();
		
	// 	switch (action.type) {
	// 		case Actions.ADD_PRODUCT:
	// 			// TEST
	// 			currStore.appState.catalog.push(action.payload);
	// 			return; 

	// 		default:
	// 			// no action found, so return given state we had before
	// 			return state;
	// 	}
		
	// }
	
}


