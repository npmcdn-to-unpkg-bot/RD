import { Component, EventEmitter, Input, Output, OnInit } from 'angular2/core';

@Component({
	selector: 'modal',
	styles: [`
		.modal {
			position: fixed;
			top: 25%; left: 35%;
			z-index: 1000;
			background-color: #ccc;
			padding: 20px;
			opacity: 1;
		}
		
		.modal-overlay {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999;
			background-color: #ddd;
			opacity: 0.75;
			width: 100%;
			height: 100%;
		}
	
	`], 
	directives: [],
	template:`
		<div class="modal-overlay"></div>
		<div class="modal">
			<ng-content></ng-content>
		</div>
`,
})

export class Modal implements OnInit {
// @Input() someInput: boolean = false;
// @Output() someOutput: EventEmitter = new EventEmitter();

	constructor() {
		// To trigger the @Output emitter, use:
		// this.someOutput.emit({ some: data });
	}

	ngOnInit() {

	}
}
