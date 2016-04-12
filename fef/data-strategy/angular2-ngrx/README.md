# Debt Remedy example app with @ngrx/Store and Redux

A test app using the [angular2-webpack-starter by @AngularClass](https://github.com/AngularClass/angular2-webpack-starter) using either the [@ngrx/store](https://github.com/ngrx/store) library and the [Redux](https://github.com/reactjs/redux) library for state management (switchable)

### Installation
> Clone/Download the repo

```bash
# install the repo with npm
npm install

# start the server
npm start
```
go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) in your browser

### @ngrx/store, Redux differences

The project contains code for using @ngrx/store or Redux for state management.

Where appropriate I have documented the differences in approach, and indicated what lines to comment out / remove comments on in the following files:

src/main.browser.ts
src/app/app.ts
src/app/debt-remedy/debt-remedy-start.ts
src/debt-remedy-start-controller.ts

### Findings

> Streamlining of store setup code and change detection

```bash
# ngrx's Store is a generic, which allows you to easily define an interface against it to give the store some structure.

// ----------
// @ngrx/Store:
// ----------
// Define an interface to give store a 'shape'
//
export interface DRStore {
    clientAnswers: ClientAnswer[];
}
// Injecting store into a service
//
constructor(private store: Store<DRStore>) {
    [...]
}
// Logging store state:
//
// Object {clientAnswers: Array[29]}
// > clientAnswers: Array[29]
//  > 0: ClientAnswer
//  > 1: ClientAnswer
//  > 2: ClientAnswer
//  > [...]
// ----------
// Redux:
// ----------
// Injecting store into a service
//
constructor(private store: Store) {
    [...]
}
// Logging store state:
//
// [ClientAnswer, ClientAnswer, ClientAnswer, ClientAnswer [...]

# @ngrx/store's Store.select method returns an observable, so we don't have to manually subscribe to store state changes
# This also allows us to take advantage of angular's built-in async pipe.

// ----------
// @ngrx/store
// ----------
// Typical service communicating with store
//
export class ClientAnswerService {
    
    clientAnswers: Observable<Array<ClientAnswers>>;
    
    constructor(private store: Store<DRStore>) {
        
        this.myData = store.select('clientAnswers');
    }
}
// ----------
// Redux
// ----------
// Typical service communicating with store
//
export class ClientAnswerService {
    
    clientAnswers: Observable<Array<ClientAnswers>>;
    
    constructor(private store: Store) {
        
        // Initialize local array
        this.clientAnswers = store.DRStore.getState();
        
        // Then subscribe to store changes
        let unsubscribe = store.DRStore.subscribe(() => {
           this.clientAnswers = store.DRStore.getState(); 
        });
    }
}

#  @ngrx/store's 'provideStore' method can be bootstrapped to automatically set up the store. Can bootstrap the Redux store but it needs to be defined elsewhere.

// ----------
// @ngrx/store
// ----------
// main component
import { provideStore } from '@ngrx/store';
export function main() [...]
return bootstrap(App, [
    ...ENV_PROVIDERS,
    ...PROVIDERS,
    ...DIRECTIVES,
    ...PIPES,
    ...APP_PROVIDERS,
    provideStore({ [reducer] })
])
// ----------
// Redux
// ----------
// main component
import { Store } from [...];
export function main() [...]
return bootstrap(App, [
    ...ENV_PROVIDERS,
    ...PROVIDERS,
    ...DIRECTIVES,
    ...PIPES,
    ...APP_PROVIDERS,
    Store
])
// Store definition
@Injectable()
export class Store {
    
    Store: Redux.Store;
    
    constructor() {
        this.Store = createStore(clientAnswers);
    }
}
```

> Since you can wire Angular2 components to detect store changes via Observables, you can effectively disable Angular2's built-in change detection. This could have big performance boosts in larger applications.

> Since @ngrx/store is the newer library, there are more add-ons that use the 'plain' Redux library - middleware, routing tools, store enhancers, utilities and developer tools. N.B. using Redux dev tools / middleware with @ngrx/store may not be difficult by converting @ngrx/store to a Redux store.

> the @ngrx/store's devtools are less mature; the redux-devtools are available as a Chrome extension.

> Discussion in @ngrx/store's Github repository [here](https://github.com/ngrx/store/issues/16#) 

### TODO
> Investigate packaged state management tools in angular2-webpack-starter
> Investigate advantages to using angular2's built-in async pipe in an app of this scale, or on a more complex app
> Investigate how use of Thunk or store enhancers could improve the app
> Investigate how the pairing of Redux and immutable.js can improve performance.
 