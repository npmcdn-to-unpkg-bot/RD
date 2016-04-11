import { bootstrap } from 'angular2/platform/browser';
import { provide } from 'angular2/core';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';


import {products} from "./infrastructure/reducers/product-reducer";
import {basket} from "./infrastructure/reducers/purchase-reducer";
import {uiState} from "./infrastructure/reducers/ui-state-reducer";

import { ReduxApp } from './features/app/redux.app.component';
import {MyReduxStore} from "./infrastructure/stores/my-redux-store";
import { provideStore } from "@ngrx/store";
import { NgrxApp } from "./features/app/ngrx.app.component";

// Set to true => Redux version
// Set to false => Ngrx version
let USE_REDUX_VERSION: boolean = false;

if (USE_REDUX_VERSION) {
	// Redux
	bootstrap(ReduxApp, [
		ROUTER_PROVIDERS,
		HTTP_PROVIDERS,
		provide(LocationStrategy, { useClass: HashLocationStrategy }),
		MyReduxStore
	]);
	
} else {
	// NGRX
	bootstrap(NgrxApp, [
		ROUTER_PROVIDERS,
		HTTP_PROVIDERS,
		provide(LocationStrategy, { useClass: HashLocationStrategy }),
		provideStore({uiState, products, basket})
	]); 
	
}


 