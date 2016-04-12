// IMMUTABLE JS version
// import {List} from "immutable";
import {Product} from "../models/product";
import {Purchase} from "../models/purchase";
import {UiState} from "../models/ui-state";


export class Mocks {
	public static initialProducts(): Array<Product> {
		// Let's just imagine this came from an API!
		let cat: Array<Product> = Array<Product>();
		cat.push(
			Product.CreateProduct
			(
				"PROD-123", 
				"Chic and unique", 
				"./images/fashion.jpg",
				"Female,Dresses,Summer",
				29.99 
			),
			Product.CreateProduct
			(
				"PROD-ABC", 
				"Drinks", 
				"./images/drinks.jpg",
				"Social,Pubs,Off license",
				10.99
			),
			Product.CreateProduct
			(
				"PROD-789", 
				"Bus pass", 
				"./images/transport.jpg",
				"Transport,Travel,Smelly people",
				5.99
			)			
		);
		
		return cat;
	}

	public static initialUiState(): UiState {
		return new UiState();
	}

	public static initialBasket(): Array<Purchase> {
		return new Array<Purchase>();
	}


	// IMMUTABLE.JS version	
	// public static initialUiState(): UiState {
	// 	return new UiState({
	// 		showVAT: false
	// 	});
	// }	
	// 
	// public static initialBasket(): List<Purchase> {
	// 	return List<Purchase>();
	// }
	
}	