/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {Home} from './home';

// import {AppState} from './app.service';

// *****
// ngrx
// *****
import { Devtools, instrumentStore, devtoolsConfig } from '@ngrx/devtools'

import { DebtRemedyStart } from './debt-remedy/debt-remedy-start';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  // *****
  // ngrx
  // *****
  providers: [
     devtoolsConfig({
        position: 'bottom',
        size: 0.3
     })
  ],
  directives: [ Devtools ],
  styles: [`
    nav ul {
      display: inline;
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 60px;
    }
    nav li {
      display: inline;
    }
    nav li.active {
      background-color: lightgray;
    }
  `],
  template: `
    <header>
      <nav>
        <ul>
          <li router-active>
            <a [routerLink]=" ['Index'] ">Index</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['Debt Remedy Start'] ">Debt Remedy</a>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <!-- ***** ngrx ***** -->
      <!-- enable ngrx-specific implementation of devtools --> 
      <ngrx-devtools></ngrx-devtools>
      <router-outlet></router-outlet>
    </main>

    <footer>
    </footer>

    <!-- <pre>this.state = {{ state | json }}</pre> -->
  `
})
@RouteConfig([
  { path: '/', name: 'Index', component: Home, useAsDefault: true },
  { path: '/home',  name: 'Home',  component: Home },
  { path: '/debt-remedy', name: 'Debt Remedy Start', component: DebtRemedyStart }
  
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  // { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') },
])
export class App {

  constructor() {
          
   }
  
  // * * * * *
  // Webpack state handling - worth investigating?
  // * * * * *
  // public appState: AppState
  
  // get state() {
  //   return this.appState.get();
  // }

  // ngOnInit() {
  //   console.log('Initial App State', this.state);
  // }
  // * * * * *

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
