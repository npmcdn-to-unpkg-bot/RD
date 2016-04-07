# Redux, Angular2 and Immutable.js ... holding hands and having a love in.

Attempt at building the store using Flux concepts implemented using the Redux and Immutable libraries.

## Observations

This started out using pure Redux with a view to plumbing in the [Angular 2 Redux Store](https://github.com/jhades/angular2-redux-store).

The Redux store is quite a few builds behind the main Angular 2 betas, so I haven't used it.  However when diving into it's code, it's basically doing what I've been doing so I've taken inspiration from it.

The [Angular 2 Redux Store](https://github.com/jhades/angular2-redux-store) basically boils down to a single abstract class that abstracts away the Redux store (see [**src/app/infrastructure/stores/redux-store.ts**](./src/app/infrastructure/stores/redux-store.ts). 

## Improvements

There's a few further things we could look at:

* ~~Change implementation of the store to use [Angular 2 Redux Store](https://github.com/jhades/angular2-redux-store).~~
	- Turns out I'm pretty much [doing the same thing](https://github.com/jhades/angular2-redux-store/blob/master/src/ReduxStore.ts).
	- Given the [Angular 2 Redux Store](https://github.com/jhades/angular2-redux-store) is a few beta versions [of Angular2] behind I've kept with mine (one less dependency and we can control the version of Ag2 in use).  
* See if using _proper_ immutable [Records](https://facebook.github.io/immutable-js/docs/#/Record) is feasible (I've used a sample app as _inspiration_ but I'm not convinced the approach is correct).
* Add in using the [Redux Dev Tools](https://github.com/gaearon/redux-devtools) to show changes propagating.	
	- And so we know it works.
	- Potentially have a play with the history playback to see how it works.
	- Does it create full graph copies? (this would be fine to development, but less so in production).
* Further implementation of the product store using [ngRx library](https://github.com/ngrx/store) in order to compare and contract approaches and code.
* Expand the app out to include child objects in the graph and investigate the impact

# Seed Origins

This is based on *Chris M's* seed project. Remainder of this README is his original read me file.

# Angular 2 Seed Project
Starting point for a blank Angular 2 application

[![devDependency Status](https://david-dm.org/ChrisMurphy/ng2-seed/dev-status.svg)](https://david-dm.org/ChrisMurphy/ng2-seed#info=devDependencies)

## General Usage

To install project global dependencies

		npm run setup
    
To install project dependencies

		npm install
		
To develop with the uncompiled version of the code and view in browser with live reload

		npm run development
		
To develop with the compiled version of the code and view in browser with live reload

		npm run production
		
To build the production version only

		npm run build

## Testing

To run e2e protractor tests on production code (if there a server running code already)

		npm run e2e.prod

To run e2e protractor tests on production code (if there is no server running the code already)

		npm run e2e.ci.prod

## Technology Stack

### Application
* angular 2.0.0 beta 13
* typescript

### Build and Dependecy Management
* systemjs
* jspm
* gulp + plugins
* live-server
		
## Info

Has integrated tasks if using Visual Studio Code

1. Press ctrl + shift + p

2. Type run and select "Task: Run Task"

3. Select from "build", "development", "production" or "setup" (relates to usage description above)
