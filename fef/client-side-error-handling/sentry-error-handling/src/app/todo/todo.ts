export class ToDo {
	public id: number = -1;
	public task: string = "";
	public done: boolean = false;
	
	constructor(id: number, task: string, done: boolean = false) {
		this.id = id;
		this.task = task;
		this.done = done;
	}
	
	isDoneFormatted(): string {
		if (this.done)
			return "Yes";
		else
			return "No";
	}
	
}