import {Injectable} from "angular2/core";
import {List} from "immutable";
import {createStore} from "redux";
import {combineReducers} from 'redux';

import {ReduxStore} from "./redux-store";
import {Mocks} from "./mocks";

import {Product} from "../models/product";
import {Purchase} from "../models/purchase";
import {UiState} from "../models/ui-state";
import {IActionBase} from "../actions/actions-bas";
import {products} from "../reducers/product-reducer";
import {uiState} from "../reducers/ui-state-reducer";
import {basket} from "../reducers/purchase-reducer";

const storeReducers = combineReducers({
	uiState,
	products,
	basket
});

const store = createStore(storeReducers, {
	uiState: Mocks.initialUiState(),
	products: Mocks.initialProducts(),
	basket: Mocks.initialBasket()
});
		

@Injectable()
export class MyStore extends ReduxStore {
	_store: Redux.Store;
	
	constructor() {
		super(store); 
	}
	
	// get catalog(): Array<Product> {
	// 	let l: List<Product> = <List<Product>> this._store.getState().products; 

	// 	return l.toArray();
	// }
	
	// get basket(): Array<Purchase> {
	// 	let l: List<Purchase> = <List<Purchase>> this._store.getState().basket;
		
	// 	return l.toArray();
	// }
	
	// get uiState(): UiState {
	// 	return this._store.getState().uiState;
	// }

	// dispatch(action: IActionBase): void {
	// 	this._store.dispatch(action);
	// }
	

	
}