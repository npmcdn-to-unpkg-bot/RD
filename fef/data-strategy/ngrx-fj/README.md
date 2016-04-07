# ngrx and ag2 store implementation

Attempt at building the store using Flux concepts implemented using ngrx

## Observations

Inspired using [build a better angular2 application with Redux and ngrx](http://onehungrymind.com/build-better-angular-2-application-redux-ngrx/)


## Improvements

There's a few further things we could look at:

*  

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
