// IMMUTABLE JS version
// import {List} from "immutable";
import {Purchase} from "../models/purchase";
import {IPurchaseAction} from "../actions/purchase-actions";
import {Mocks} from "../stores/mocks";
import * as _ from "../helpers/underscore";

export const basket = (state: Array<Purchase> = Mocks.initialBasket(), action: IPurchaseAction): Array<Purchase> => {
	
	switch (action.type) {
		case "ADD_PURCHASE":
			// return state.push( Purchase.CreatePurchase(action.sku, action.quantity, action.price) );
			let mockPurchase: Purchase = Purchase.CreatePurchase(action.sku, action.quantity, action.price);
			return _.AppendItem(state, mockPurchase);
		
		case "REMOVE_PURCHASE":
			// TODO: Decrement version
			// return List<Purchase>( state.filter((p: Purchase) => p.sku !== action.sku) );
			return _.DeleteItem(state, (p:Purchase) => p.sku !== action.sku);
		
		default:
			return state;
	}
		
}

// IMMUTABLE JS version
// export const basket = (state: List<Purchase> = Mocks.initialBasket(), action: IPurchaseAction) => {
	
// 	function indexOf(sku: string): number {
// 		return state.findIndex((p: Purchase) => p.sku === action.sku);
// 	}
// 	function bySku(sku: string): Purchase {
// 		let hits = state.filter((p: Purchase) => p.sku === action.sku);
// 		if (hits.count() > 0) {
// 			return hits.first();
// 		}
// 		return null;
// 	}
		
// 	switch (action.type) {
// 		case "ADD_PURCHASE":
// 			return state.push( Purchase.CreatePurchase(action.sku, action.quantity, action.price) );
		
// 		case "REMOVE_PURCHASE":
// 			// TODO: Decrement version
// 			return List<Purchase>( state.filter((p: Purchase) => p.sku !== action.sku) );
		
// 		default:
// 			return state;
// 	}
		
// }