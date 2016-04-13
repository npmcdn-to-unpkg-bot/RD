/*
 * Providers provided by Angular
 */
import {bootstrap} from 'angular2/platform/browser';
import {provideInitialState, hotModuleReplacement} from 'angular2-hmr';
/*
* Platform and Environment
* our providers/directives/pipes
*/
import {DIRECTIVES, PIPES, PROVIDERS} from './platform/browser';
import {ENV_PROVIDERS} from './platform/environment';

/*
* App Component
* our top level component that holds all of our components
*/
import {AppState} from './app/app.service';
import {App} from './app/app';

import { clientAnswers, questions, questionPages } from './shared/reducers/debt-remedy-store-reducers';

// *****
// ngrx
// *****
import { provideStore } from '@ngrx/store';
import { instrumentStore } from '@ngrx/devtools';
import { ClientAnswerServiceNgrx } from './shared/services/client-answer-service-ngrx';

// *****
// Redux
// *****
// import { Store } from './shared/store/debt-remedy-store-redux'
// import { ClientAnswerServiceRedux } from './shared/services/client-answer-service-redux';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
export function main(initialState = {}) {
  let APP_PROVIDERS = [
    provideInitialState(initialState),
    AppState
  ];

  return bootstrap(App, [
    ...ENV_PROVIDERS,
    ...PROVIDERS,
    ...DIRECTIVES,
    ...PIPES,
    ...APP_PROVIDERS,
    
    // *****
    // Redux
    // *****
    // Since we want to inject the store into the ClientAnswerService (single point of contact with Store)
    //  we need to define it elsewhere and then bootstrap it
    // ClientAnswerServiceRedux,
    // Store,
    
    // *****
    // ngrx
    // *****
    // ngrx allows for bootstrapping the store using the provideStore([reducers]) method and then
    //  injecting its own Store property where needed (here the ClientAnswerService). 
    ClientAnswerServiceNgrx,
    provideStore({clientAnswers, questions, questionPages}),
    instrumentStore()
  ])
  .catch(err => console.error(err));

}





/*
 * Vendors
 * For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
 * You can also import them in vendors to ensure that they are bundled in one file
 * Also see custom-typings.d.ts as you also need to do `typings install x` where `x` is your module
 */


/*
 * Hot Module Reload
 * experimental version by @gdi2290
 */
if ('development' === ENV && HMR === true) {
  // activate hot module reload
  hotModuleReplacement(main, module);
} else {
  // bootstrap when documetn is ready
  document.addEventListener('DOMContentLoaded', () => main());
}
