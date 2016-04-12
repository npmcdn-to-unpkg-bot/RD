// IMMUTABLE JS version
// import { Map, List } from "immutable";

export class Purchase {
	public sku: string = "";
	public quantity: number = 0;
	public price: number = 0;

	static CreatePurchase(sku: string, quantity: number, price: number) {
		let p = new Purchase();
		
		p.sku = sku;
		p.quantity = quantity;
		p.price = price;
		
		return p;
	}
	
}


// IMMUTABLE JS version
// export class Purchase {
// 	private _data: Map<string, any>;
	
// 	constructor(data: any = undefined) {
// 		data = data || {
// 			sku: "", quantity: 0
// 		};
// 		this._data = Map<string, any>(data);
// 	}
	
// 	get sku(): string {
// 		return <string> this._data.get("sku");
// 	}
	
// 	setSku(value: string): Purchase {
// 		return new Purchase(this._data.set("sku", value));
// 	}
	
// 	get quantity(): number {
// 		return <number> this._data.get("quantity");
// 	}
	
// 	setQuantity(value: number): Purchase {
// 		return new Purchase(this._data.set("quantity", value));
// 	}
	
// 	// price at time of purchase
// 	get price(): number {
// 		return <number> this._data.get("price");
// 	}
	
// 	setPrice(value: number): Purchase {
// 		return new Purchase(this._data.set("price", value));
// 	}
	
// 	static CreatePurchase(sku: string, quantity: number, price: number) {
// 		let p = new Purchase();
		
// 		p = p.setSku(sku);
// 		p = p.setQuantity(quantity);
// 		p = p.setPrice(price);
		
// 		return p;
// 	}
	
// }