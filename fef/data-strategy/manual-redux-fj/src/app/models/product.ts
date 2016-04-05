
export class Product {
	sku: string = "";
	name: string = "";
	imageUrl: string = "";
	categoryChain: Array<string> = new Array<string>();
	price: number;
	
	constructor(sku: string, name: string, imageUrl: string, categoryChainCsv: any, price: number) {
		this.sku = sku;
		this.name = name.toUpperCase();
		this.imageUrl = imageUrl;
		if (Array.isArray(categoryChainCsv)) {
			this.categoryChain = new Array<string>();
			(<Array<string>> categoryChainCsv).forEach((s) => this.categoryChain.push(s)); 
			
		} else {
			// Assume it's a string
			this.categoryChain = <Array<string>> categoryChainCsv.split(",");
		}
		this.price = price;
	}
	
	static Create(): Product {
		return new Product("", "", "", "", 22);		
	}
	
	static MockIndex: number = 1;
	
	static MockProduct(): Product {
		let p = new Product(
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
	
	static createCatalog(): Array<Product> {
		// Let's just imagine this came from an API!
		let cat = new Array<Product>();
		cat.push(
			new Product
			(
				"PROD-123", 
				"Chic and unique", 
				"./images/fashion.jpg",
				"Female,Dresses,Summer",
				29.99 
			),
			new Product
			(
				"PROD-ABC", 
				"Drinks", 
				"./images/drinks.jpg",
				"Social,Pubs,Off license",
				10.99
			),
			new Product
			(
				"PROD-789", 
				"Bus pass", 
				"./images/transport.jpg",
				"Transport,Travel,Smelly people",
				5.99
			)			
		);
		
		return Product.SortProducts(cat);
	}
	
	static SortProducts(arr: Array<Product>): Array<Product> {
		return arr.sort((p1, p2): number => {
			let result: number = 0;
			
			if (p1.sku < p2.sku) 
				result = -1;
			else if (p1.sku > p2.sku)
				result = +1;
			else
				result = 0;
				
			return result;
		});
	}
	
	
	
}
