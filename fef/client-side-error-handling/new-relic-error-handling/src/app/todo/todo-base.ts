import { Component, View, OnInit } from 'angular2/core';
import { ToDo } from "./todo";
import { ToDoEdit } from "./todo-edit";
import { ToDoList } from "./todo-list";

declare var NREUM;

@Component({
	selector: 'app',
	directives: [ToDoList, ToDoEdit],
	template: 
	`
		<h1>What To Do!</h1>
		<div>
			<todo-list [items]="_myToDos" (onEditCmd)="openEdit($event)">			
			</todo-list>
		</div>
		<todo-edit [item]="_edit" (onSaveCmd)="onSave($event)"></todo-edit>
        <button (click)="generateError()">Throw error</button>
	`
})

export class ToDoBase implements OnInit {
	_myToDos: Array<ToDo> = new Array<ToDo>();
	_edit: ToDo = null;
	
  constructor() {
  }

	ngOnInit() {
		this._myToDos = [
			new ToDo(1, "Make a cuppa"),
			new ToDo(2, "Sleep more than 7 hours"),
			new ToDo(3, "Take down Star Wars Christmas decorations")
		];
	}

	openEdit(todo: ToDo) {
		this._edit = todo;
	}
	
	onSave(t: ToDo) {
		console.info("onSave", t);
		// have to null out, otherwise we won't be able to edit that row again!
		this._edit = null;
	}
    
    generateError() {
        // debugger;
        let er = new Error('Error thrown');
        throw(er);
        
        // NREUM.noticeError(er);
        
    }
	
}


