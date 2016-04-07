import {IActionBase} from "./action-base.ts";

export interface IProductAction extends IActionBase {
	sku?: string;
	name?: string;
	imageUrl?: string;
	categoryChain?: string;
	price?: number;
}

export function addProduct(sku: string, name: string, imageUrl: string, categoryChain: string, price: number) {
	return {
		type: "ADD_PRODUCT",
		name,
		imageUrl,
		categoryChain,
		price
	}
}

export function removeProduct(sku: string) {
	return {
		type: "REMOVE_PRODUCT",
		sku
	}
}

export function updateCategoryChain(sku: string, categoryChain: string) {
	return {
		type: "UPDATE_CATEGORY_CHAIN",
		sku,
		categoryChain
	}
}
 