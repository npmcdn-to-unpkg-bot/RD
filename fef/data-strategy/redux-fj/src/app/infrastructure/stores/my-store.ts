import {Injectable} from "angular2/core";
import {createStore} from "redux";
import {combineReducers} from 'redux';

import {ReduxStore} from "./redux-store";
import {Mocks} from "./mocks";

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
	constructor() {
		super(store); 
	}
	
}