// snippet gist: https://gist.github.com/toepoke/8430072d53ec564ca7ea
import { Component, EventEmitter, Input, Output } from 'angular2/core';
import { STRATEGY } from "../../infrastructure/models/config";
import { ReduxApp } from "./redux.app.component";
import { NgrxApp } from "./ngrx.app.component";

@Component({
	selector: 'app', 
	changeDetection: STRATEGY,
	directives: [ReduxApp, NgrxApp],
	template:`
		<div>
			<redux-app class="left-panel"></redux-app>
			<ngrx-app class="right-panel"></ngrx-app>
		</div>
		<div class="clear"></div>
`,
})

export class App {
	constructor() {
	}
}

