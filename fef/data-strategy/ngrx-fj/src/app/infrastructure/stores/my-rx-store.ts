// IMMUTABLE JS version
// import {List} from "immutable";
import {Product} from "../models/product";
import {Purchase} from "../models/purchase";
import {UiState} from "../models/ui-state";


export interface MyNgStore {
	products: Array<Product>;
	basket: Array<Purchase>;
	uiState: UiState;
}
