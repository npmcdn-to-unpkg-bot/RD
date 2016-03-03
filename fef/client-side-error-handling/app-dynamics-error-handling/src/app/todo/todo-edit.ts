import { Component, View, EventEmitter, Input, Output, OnInit, OnChanges } from 'angular2/core';
import { FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, Control } from "angular2/common";
import { ToDo } from "./todo";

@Component({
	selector: 'todo-edit', 
	directives: [],
	template:
	`
		<p *ngIf="_isEditing" class="ng-valid">
			"<strong>{{item.task}}</strong>"
		</p>	
		<form *ngIf="_isEditing" [ngFormModel]="_form" (ngSubmit)="onSubmit()">
			<ul>
				<li>Id: {{item.id}}</li>
				<li><label>Task: <input type="text" ngControl="task" /></label></li>
				<li><label>Complete: <input type="checkbox" ngControl="done" /></label></li>
			</ul>
			<button type="submit" [disabled]="!_form.valid">Save</button>
		<form>
	`,
})

export class ToDoEdit implements OnInit, OnChanges {
	@Input() item: ToDo = null;
	@Output() onSaveCmd: EventEmitter<ToDo> = new EventEmitter<ToDo>();

	_isEditing: boolean = false;
	_form: ControlGroup;
	task: Control;
	done: Control;

  constructor(fb: FormBuilder) {
		this.task = new Control("", Validators.required);
		this.done = new Control(false);
		
		this._form = fb.group({
			"task": this.task,
			"done": this.done			
		});
  }
	
	ngOnChanges(changes) {
		if (changes.item && changes.item.currentValue) {
			let i: ToDo = <ToDo> changes.item.currentValue;
			this.task.updateValue(i.task);
			this.done.updateValue(i.done);
			this._isEditing = true;
		}
	}

	onSubmit() {
		let ctrls = (<any>this._form.controls);

		// As "_edit" is a reference to the item in the list, we only need
		// to update the reference
		this.item.task = ctrls.task.value;
		this.item.done = ctrls.done.value;
		
		this.onSaveCmd.emit(this.item);

		// Finished editing
		this.item = null;
		this._isEditing = false;
		
	}
	
	ngOnInit() {
		// To trigger the @Output emitter, use:
		// this.someOutput.emit({ some: data });
		
	}
}
