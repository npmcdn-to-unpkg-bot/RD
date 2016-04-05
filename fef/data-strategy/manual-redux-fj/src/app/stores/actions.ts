import {Product} from "../models/product";

export class Action {
	type: string = "";
	payload: any = null;
	
	constructor(type: string, payload: any) {
		this.type = type;
		this.payload = payload;
	}
}

export class Actions {
	static ADD_PRODUCT: string = "ADD_PRODUCT";
	static EDIT_PRODUCT: string = "EDIT_PRODUCT";
	static DELETE_PRODUCT: string = "DELETE_PRODUCT";
	static BUY_PRODUCT: string = "BUY_PRODUCT";
	static TOGGLE_SHOW_VAT: string = "TOGGLE_SHOW_VAT";
	
}