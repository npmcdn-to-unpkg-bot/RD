import {List} from "immutable";
import {UiState} from "../models/ui-state";
import {IUiStateAction} from "../actions/ui-state-actions";

export function uiState(state: UiState = new UiState(), action: IUiStateAction): any {

	switch (action.type) {
		case "TOGGLE_VAT":
			return state.setShowVAT( !state.showVAT );
		
	}
	
	return state;

}