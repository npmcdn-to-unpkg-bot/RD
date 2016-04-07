import {IActionBase} from "./action-base.ts";

export interface IPurchaseAction extends IActionBase {
	sku?: string;
	quantity?: number;
	price?: number;	
}

export function addPurchase(sku: string, quantity: number, price: number) {
	return {
		type: "ADD_PURCHASE",
		quantity,
		price
	}
}

export function removePurchase(sku: string) {
	// yeah, should probably have an order reference, but hay ho!
	return {
		type: "REMOVE_PURCHASE",
		sku
	}
}