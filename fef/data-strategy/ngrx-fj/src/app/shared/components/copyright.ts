import { Component, EventEmitter, Input, Output, OnInit } from 'angular2/core';
import { ChangeDetectionStrategy } from "angular2/core";
import { STRATEGY } from "../../infrastructure/models/config";

@Component({
	selector: 'copyright', 
	changeDetection: STRATEGY,
	directives: [],
	template:`
		<p>
			<strong>&copy;{{_currentYear}}</strong> 
			
			<ng-content></ng-content>
		</p>
`,
})

export class Copyright {
	_currentYear = 0;
	
	constructor() {
		this._currentYear = (new Date()).getFullYear();
	}
	
}



