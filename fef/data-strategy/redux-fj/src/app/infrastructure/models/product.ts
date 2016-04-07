import { Map, List } from "immutable";

export class Product {
	private _data: Map<string, any>;
	
	constructor(data: any = undefined) {
		data = data || {
			sku: "", name: "", categoryChain: "", imageUrl: "", price: 0
		};
		this._data = Map<string, any>(data);
	}

	get sku(): string {
		return <string> this._data.get("sku");
	}
	setSku(value: string): Product {
		return new Product(this._data.set("sku", value));
	}
	
	// TODO: Convert to an array
	get categoryChain(): string {
		return <string> this._data.get("categoryChain");	
	}
	setCategoryChain(value: string): Product {
		return new Product(this._data.set("categoryChain", value));
	}
	
	get name(): string {
		return <string> this._data.get("name");
	}
	setName(value: string): Product {
		return new Product(this._data.set("name", value));
	}
	
	get imageUrl(): string {
		return <string> this._data.get("imageUrl");
	}
	setImageUrl(value: string): Product {
		return new Product(this._data.set("imageUrl", value));
	}

	get price(): number {
		return <number> this._data.get("price");
	}
	setPrice(value: number): Product {
		return new Product(this._data.set("price", value));
	}
	
	static Create(): Product {
		return new Product();		
	}
	
	static CreateProduct(sku: string, name: string, imageUrl: string, categoryChain: string, price: number): Product {
		let p = new Product();
		
		p = p.setSku(sku);
		p = p.setName(name);
		p = p.setImageUrl(imageUrl);
		p = p.setCategoryChain(categoryChain);
		p = p.setPrice(price);

		return p;		
	}
	
	static MockIndex: number = 1;
	
	static MockProduct(): Product {
		let p = Product.CreateProduct(
			`MOCK-${Product.MockIndex}`,
			`My mocked product ${Product.MockIndex}`,
			"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSZuQjGpPWo-X8W08ooJGtew3QywS1Qs7KUBZkXyDpRWrxAaS8FFQ",
			"fun, electrical, slobtime",
			(Product.MockIndex / 10)		
		);
		
		// Increase for next time
		Product.MockIndex++;
		
		return p;
	}
	
}
