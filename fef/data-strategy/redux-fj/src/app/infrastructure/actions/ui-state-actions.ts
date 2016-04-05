import {IActionBase} from "../stores/action-base.ts";

export interface IUiStateAction extends IActionBase {
	type: string,
	showVAT: boolean
}

export function toggleVat() {
	return {
		type: "TOGGLE_VAT"		
	}
}

