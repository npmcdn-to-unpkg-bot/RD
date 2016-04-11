import { bootstrap } from 'angular2/platform/browser';
import { provide } from 'angular2/core';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';


import {products} from "./infrastructure/reducers/product-reducer";
import {basket} from "./infrastructure/reducers/purchase-reducer";
import {uiState} from "./infrastructure/reducers/ui-state-reducer";

// import { ReduxApp } from './features/app/redux.app.component';
// import {MyReduxStore} from "./infrastructure/stores/my-redux-store";

// NGRX
import { provideStore } from "@ngrx/store";
import { NgrxApp } from "./features/app/ngrx.app.component";

bootstrap(NgrxApp, [
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	provide(LocationStrategy, { useClass: HashLocationStrategy }),
	// MyReduxStore,
	provideStore({uiState, products, basket})
]); 


