// import 'zone.js/dist/zone.min.js';
// import 'reflect-metadata';
import { provide } from 'angular2/core';
import { bootstrap } from "angular2/platform/browser";
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { App } from './app/app';
import { AppStore } from "./app/stores/app-store";


bootstrap(App, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
		AppStore,
    provide(LocationStrategy, {useClass: HashLocationStrategy})	 
		 
]).catch(err => {
	console.error(err); 
});

