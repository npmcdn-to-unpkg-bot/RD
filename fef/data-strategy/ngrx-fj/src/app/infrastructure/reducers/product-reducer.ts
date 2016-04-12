// IMMUTABLE JS version
//import {List} from "immutable";
import {Product} from "../models/product";
import {IProductAction} from "../actions/product-actions";
import {Mocks} from "../stores/mocks";
import * as _ from "../helpers/underscore";


export const products = (state: Array<Product> = Mocks.initialProducts(), action: IProductAction): Array<Product> => {
	
	function indexOf(sku: string): number {
		return state.findIndex((p: Product) => p.sku === action.sku);
	}
	
	switch (action.type) {
		case "ADD_PRODUCT":
			let res: Array<Product> = new Array<Product>(...state);
			res.push( Product.CreateProduct(action.sku, action.name, action.imageUrl, action.categoryChain, action.price) );
			return res;
			
		case "REMOVE_PRODUCT":
			return _.DeleteItem(state, (p: Product) => p.sku !== action.sku);

		case "UPDATE_CATEGORY_CHAIN":
			let pos: number = indexOf(action.sku);
			let currProduct: Product = state[pos];

			let clone: Product = Product.Clone(currProduct);
			clone.categoryChain = action.categoryChain.toString();

			return _.UpdateList(state, pos, clone);
		
		default:
			return state;
	}	
}

// IMMUTABLE JS version
// export const products = (state: List<Product> = Mocks.initialProducts(), action: IProductAction) => {
	
// 	function indexOf(sku: string): number {
// 		return state.findIndex((p: Product) => p.sku === action.sku);
// 	}
	
// 	switch (action.type) {
// 		case "ADD_PRODUCT":
// 			return state.push( Product.CreateProduct(action.sku, action.name, action.imageUrl, action.categoryChain, action.price) );
			
// 		case "REMOVE_PRODUCT":
// 			let newState: List<Product> = List<Product>(state.filter((p: Product) => p.sku !== action.sku))
// 			return newState;

// 		case "UPDATE_CATEGORY_CHAIN":
// 			return state.update(indexOf(action.sku), (p: Product) => p.setCategoryChain(action.categoryChain) ); 
		
// 		default:
// 			return state;
// 	}	
// }