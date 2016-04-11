import {List} from "immutable";
import {Product} from "../models/product";
import {IProductAction} from "../actions/product-actions";
import {Mocks} from "../stores/mocks";


export const products = (state: List<Product> = Mocks.initialProducts(), action: IProductAction) => {
	
	function indexOf(sku: string): number {
		return state.findIndex((p: Product) => p.sku === action.sku);
	}
	
	switch (action.type) {
		case "ADD_PRODUCT":
			return state.push( Product.CreateProduct(action.sku, action.name, action.imageUrl, action.categoryChain, action.price) );
			
		case "REMOVE_PRODUCT":
			let newState: List<Product> = List<Product>(state.filter((p: Product) => p.sku !== action.sku))
			return newState;

		case "UPDATE_CATEGORY_CHAIN":
			return state.update(indexOf(action.sku), (p: Product) => p.setCategoryChain(action.categoryChain) ); 
		
		default:
			return state;
	}	
}