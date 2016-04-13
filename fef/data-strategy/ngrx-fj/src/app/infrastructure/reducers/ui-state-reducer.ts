// IMMUTABLE JS version
// import {List} from "immutable";
import {UiState} from "../models/ui-state";
import {IUiStateAction} from "../actions/ui-state-actions";
import {Mocks} from "../stores/mocks";
import * as _ from "../helpers/underscore";
import * as ditto from "../helpers/ditto";

export const uiState = (state: UiState = Mocks.initialUiState(), action: IUiStateAction) => {

	switch (action.type) {
		case "TOGGLE_VAT":
			let newState: UiState = ditto.updateItem(state, {
				showVAT: !state.showVAT
			});
			return newState;
	}
	
	return state;

}


// IMMUTABLE JS version
// export const uiState = (state: UiState = Mocks.initialUiState(), action: IUiStateAction) => {

// 	switch (action.type) {
// 		case "TOGGLE_VAT":
// 			return state.setShowVAT( !state.showVAT );
// 	}
	
// 	return state;

// }