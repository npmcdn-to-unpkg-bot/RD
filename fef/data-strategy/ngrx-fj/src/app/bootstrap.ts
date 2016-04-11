import { bootstrap } from 'angular2/platform/browser';
import { provide } from 'angular2/core';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';

// Shared between Redux and Ngrx
import { products } from "./infrastructure/reducers/product-reducer";
import { basket } from "./infrastructure/reducers/purchase-reducer";
import { uiState } from "./infrastructure/reducers/ui-state-reducer";

// Redux dependencies
import { ReduxApp } from './features/app/redux.app.component';
import { MyReduxStore } from "./infrastructure/stores/my-redux-store";

// Redux dependencies
import { NgrxApp } from "./features/app/ngrx.app.component";
import { provideStore } from "@ngrx/store";

// Container for both Redux and Ngrx versions
import { App } from "./features/app/app.component";

bootstrap(App, [
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	provide(LocationStrategy, { useClass: HashLocationStrategy }),
	provideStore({uiState, products, basket}),
	MyReduxStore
]);
