import {List} from "immutable";
import {UiState} from "../models/ui-state";
import {IUiStateAction} from "../actions/ui-state-actions";
import {Mocks} from "../stores/mocks";

export const uiState = (state: UiState = Mocks.initialUiState(), action: IUiStateAction) => {

	switch (action.type) {
		case "TOGGLE_VAT":
			return state.setShowVAT( !state.showVAT );
	}
	
	return state;

}