import { Component, View, Input } from 'angular2/core';
import { DetectorComponent } from "../decorators/detector-component";

@DetectorComponent({
	selector: 'flippy',
	styles: [`
		em {
			color: #8608B3;
			font-weight: bold;
		}
	`], 
	directives: [],
	templateUrl: "./app/flippy/flippy-template",
	styleUrls: ["./app/flippy/flippy-template"]
})

export class Flippy {
	@Input() deviceType: string = "";

	constructor() {
	}

}

