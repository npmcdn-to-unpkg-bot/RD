import {List} from "immutable";
import {Purchase} from "../models/purchase";
import {IPurchaseAction} from "../actions/purchase-actions";

export function basket(state: List<Purchase> = List<Purchase>(), action: IPurchaseAction): any {
	
	function indexOf(sku: string): number {
		return state.findIndex((p: Purchase) => p.sku === action.sku);
	}
	function bySku(sku: string): Purchase {
		let hits = state.filter((p: Purchase) => p.sku === action.sku);
		if (hits.count() > 0) {
			return hits.first();
		}
		return null;
	}
		
	switch (action.type) {
		case "ADD_PURCHASE":
			return state.push( Purchase.CreatePurchase(action.sku, action.quantity, action.price) );
		
		case "REMOVE_PURCHASE":
			// TODO: Decrement version
			return List<Purchase>( state.filter((p: Purchase) => p.sku !== action.sku) );
		
		default:
			return state;
	}
		
}