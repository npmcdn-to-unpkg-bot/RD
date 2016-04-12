// IMMUTABLE JS version
// import { Map, List } from "immutable";

export class UiState {
	public showVAT: boolean = false;
}

// IMMUTABLE JS version
// export class UiState {
// 	private _data: Map<string, any>;
	
// 	constructor(data: any = undefined) {
// 		data = data || {
// 			showVAT: false
// 		}
// 		this._data = Map<string, any>(data);
// 	}
	
// 	get showVAT(): boolean {
// 		return <boolean> this._data.get("showVAT");
// 	}
	
// 	setShowVAT(value: boolean): UiState {
// 		return new UiState(this._data.set("showVAT", value));
// 	}
	
// }