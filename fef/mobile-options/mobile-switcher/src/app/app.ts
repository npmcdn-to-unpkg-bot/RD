import { Component, View } from 'angular2/core';
import { Flippy } from "./flippy/flippy";

@Component({
	selector: 'app',
	directives: [Flippy],
	template: 
	`
		<h1>Device Detection Example</h1>
		
		<div>
			<flippy></flippy>			
		</div>
	`
})

export class AppComponent {
  constructor() {
  }

}



