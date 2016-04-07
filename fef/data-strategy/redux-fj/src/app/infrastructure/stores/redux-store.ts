// 90% ripped from here (saves _another_ bloomin' dependency - and once that hasn't got angular2 up-to-date!)

/**
 *
 * A minimalistic Redux store for Angular 2. This class is meant to demonstrate how Redux can be integrated with Angular 2.
 *
 * This class is meant to be sub-classed per project, and a redux store needs to be passed in the constructor.
 *
 * This class then needs to be passed to the root bootstrap call of the application, so that the store can be
 * injected in any part of the application that needs it.
 *
 * The redux API methods getState(), dispatch() and subscribe() are exposed directly.
 *
 */

import {IActionBase} from "../actions/action-base";

export abstract class ReduxStore {

	static initialized: boolean = false;

	constructor(private store: any) {
		if (!store) {
			throw new Error('store cannot be undefined. Make sure to pass the redux store as the only argument of the constructor.');
		}
		if (ReduxStore.initialized) {
			throw new Error('Only one redux store can exist per application.');
		}
		
		ReduxStore.initialized = true;
	}

	/**
	 * protected to enforce caller to convert to typed classes
	 * (also means immutable lists can be converted into normal arrays)
	 */
	protected getState(): any {
		return this.store.getState();
	}
	
	dispatch(action: IActionBase): any {
		return this.store.dispatch(action);
	}

	subscribe(listener: Function) {
		return this.store.subscribe(() => listener(this.getState()));
	}

}


