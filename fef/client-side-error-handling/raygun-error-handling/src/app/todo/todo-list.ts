import { Component, View, EventEmitter, Input, Output, OnInit } from 'angular2/core';
import { ToDo } from "./todo";

@Component({
	selector: 'todo-list', 
	directives: [],
	template:`
		<h2>List</h2>
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>TASK</th>
					<th>COMPLETE</th>
					<th>EDIT</th>
				</tr>
			</thead>
			<tbody>
				<tr *ngFor="var t of items">
					<td>{{t.id}}</td>
					<td>{{t.task}}</td>
					<td>{{t.isDoneFormatted()}}</td>
					<td><button (click)="onEdit(t)">EDIT</button></td>
				</tr>
			</tbody>
		</table>
`,
})

export class ToDoList {
	@Input() items: Array<ToDo>;
	@Output() onEditCmd: EventEmitter<ToDo> = new EventEmitter<ToDo>();

	constructor() {
	}
	
	onEdit(todo: ToDo) {
		this.onEditCmd.emit(todo);
	}

}
