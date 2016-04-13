import * as ditto from "./ditto";

// Yeah, I know use Karma, or assert or something ... I'm just playing around, sue me :-)

class Person {
	
	firstName: string = "";
	lastName: string = "";
	partner: Person = null;
	
	hasPartner(): boolean {
		return (this.partner !== null && !this.partner === undefined);
	}
	
	public isSameAs(other: Person): boolean {
		if (this.firstName !== other.firstName)
			return false;
		if (this.lastName !== other.lastName)
			return false;
		if (this.partner && other.partner) 
			return this.partner.isSameAs(other.partner);	
		
		// all ok
		return true;
	}
	
	public isDifferentTo(other: Person): boolean {
		return !this.isSameAs(other);
	}

	static create(firstName: string, lastName: string): Person {
		let p: Person = new Person();
		p.firstName = firstName;
		p.lastName = lastName;
		return p;
	}
	
	static createWithPartner(firstName: string, lastName: string, pFirstName: string, pLastName: string): Person {
		let p: Person = Person.create(firstName, lastName);
		
		p.partner = Person.create(pFirstName, pLastName);
		
		return p;
	}

	static isListSameAs(a: Array<Person>, b: Array<Person>)	{
		// assuming caller isn't daft! (no null checks)
		if (a.length !== b.length)
			return false;
		
		for (var i=0; i < a.length; i++) {
			let lhs: Person = a[i];
			let rhs: Person = b[i];
			
			if (!lhs.isSameAs(rhs))
				return false;
		}
		
		return true;
	}
	
	static isListDifferentFrom(a: Array<Person>, b: Array<Person>)	{
		return !Person.isListSameAs(a, b);
	}
	
	
}

let _currentTest: number = 1;

function assert(result: boolean, msg: string = "") {
	if (result) {
		console.log(`%c${_currentTest}: PASS - ${msg}`, "color: green");
	} else {
		console.error(`%c${_currentTest}: FAIL - ${msg}`, "color: red");
		debugger; // so you can debug back up the stack easily
	}

	// inc for next one	
	_currentTest++;
}

function makeTestPeople(): Array<Person> {
	let peeps: Array<Person> = new Array<Person>();
	
	peeps.push(
		Person.createWithPartner("Fred", "Flintstone", "Wilma", "Flintstone"),
		Person.createWithPartner("Barney", "Rubble", "Betty", "Rubble"),
		Person.createWithPartner("Homer", "Simpson", "Marge", "Simpson")
	);

	return peeps;
}


function shouldUpdateItem(): void {
	let p: Person = Person.create("Fred", "Flintstone");

	// Should be different
	let a: Person = ditto.updateItem(p, {firstName: "Barney"});
	assert(p.isDifferentTo(a), "p is same as a");
	
	// Should be same
	let b: Person = ditto.updateItem(p, {});
	assert(p.isSameAs(b), "p is different to b");
	
} // shouldUpdateItem


function canAny(): void {
	
	// null => !any
	let peeps: Array<Person> = null;
	assert(!ditto.any(peeps), "Any with null array should be false");

	// undefined => !any
	peeps = undefined;
	assert(!ditto.any(peeps), "Any with undefined array should be false");

	// 1 => any
	peeps = new Array<Person>(Person.create("Fred", "Flintstone"));
	assert(ditto.any(peeps), "Should be some in 'any'");	
	
} // canAny


function canEmpty(): void {
	
	// null => empty
	let peeps: Array<Person> = null;
	assert(ditto.empty(peeps), "empty with null array should be false");

	// undefined => empty
	peeps = undefined;
	assert(ditto.empty(peeps), "empty with undefined array should be false");

	// 1 => !empty
	peeps = new Array<Person>(Person.create("Fred", "Flintstone"));
	assert(!ditto.empty(peeps), "Should be some in 'empty'");	
	
} // canAny


function canLast(): void {
	
	// null => !any
	let peeps: Array<Person> = null;
	assert(ditto.last(peeps) === null, "Last with null array should be false");

	// undefined => !any
	peeps = undefined;
	assert(ditto.last(peeps) === null, "Last with undefined array should be false");

	// 1 => any
	peeps = new Array<Person>(
		Person.create("Fred", "Flintstone"),
		Person.create("Barney", "Rubble")
	);
	assert(ditto.last(peeps) === peeps[peeps.length-1], "Failed to find last item");	
	
} // canLast


function canFirst(): void {
	
	// null => !any
	let peeps: Array<Person> = null;
	assert(ditto.first(peeps) === null, "first with null array should be false");

	// undefined => !any
	peeps = undefined;
	assert(ditto.first(peeps) === null, "first with undefined array should be false");

	// 1 => any
	peeps = new Array<Person>(
		Person.create("Fred", "Flintstone"),
		Person.create("Barney", "Rubble")
	);
	assert(ditto.first(peeps) === peeps[0], "Failed to find first item");	
	
} // canFirst



function shouldFindIndexOf(): void {
	let peeps: Array<Person> = makeTestPeople();
	let pos: number = -1;
		
	pos = ditto.indexOf(peeps, (p:Person) => p.lastName === "Flintstone")
	assert(pos == 0, "Found first hit");

	pos = ditto.indexOf(peeps, (p:Person) => p.firstName === "Homer");
	assert(pos == 2, "Found last hit");	

} // shouldFindIndexOf


function shouldUpdateList(): void {
	// by predicate
	let input: Array<Person>;
	let output: Array<Person>;
	
	input = makeTestPeople();
	output = ditto.updateList(input, 
		(p:Person) => {p.firstName === "Homer"}, {
			lastName: "Griffin"
		}
	);
	
	assert(output[2].lastName === "Griffin", "Change 'Homer Flintstone' to 'Homer Griffin'.");
	
	// by position
	input = makeTestPeople();
	output = ditto.updateList(input, 1, {
		firstName: "Mr Flibble"
	});
	
	assert(output[1].firstName == "Mr Flibble", "Change 'Barney Rubble' to 'Barney Mr Flibble'");

} // shouldUpdateList


function shouldAppendToList(): void {
	let input: Array<Person>, output: Array<Person>;
	let p: Person = Person.create("Alpha", "Beta");
	
	input = makeTestPeople();
	output = ditto.append(input, p);
	
	assert(output.length > input.length, "Output list should be longer after adding an item.")
	assert(output[output.length-1].lastName == "Beta", "Item added surname isn't 'Beta'");
		
} // shouldAppendToList


function shouldPrependToList(): void {
	let input: Array<Person>, output: Array<Person>;
	let p: Person = Person.create("Alpha", "Beta");
	
	input = makeTestPeople();
	output = ditto.prepend(input, p);
	
	assert(output.length > input.length, "Output list should be longer after inserting an item.")
	assert(output[0].lastName == "Beta", "Item added surname isn't 'Beta'");
	assert(output[output.length-1].firstName == "Homer", "List hasn't shifted down after inserting an item at the head.");
		
} // shouldAppendToList


function shouldDeleteItems(): void {
	let input: Array<Person>, output: Array<Person>;
	
	// by predicate
	input = makeTestPeople();
	output = ditto.deleteItems(input, (p:Person) => p.firstName === "Barney");
	
	assert(input.length > output.length, "Output list should be smaller after deleting an item.")
	assert(output[0].firstName === "Fred", "First item should stay as Fred");
	assert(output[1].firstName === "Homer", "Second item is now Homer");
	
	// by number
	input = makeTestPeople();
	output = ditto.deleteItems(input, 0);
	assert(input.length > output.length, "Output list should be smaller after deleting an item.")
	assert(output[0].firstName === "Barney", "First item should now be as Barney");
	assert(output[1].firstName === "Homer", "Second item is now Homer (was the third)");
		
	// not found => not touched (AND SAME COPY)
	input = makeTestPeople();
	output = ditto.deleteItems(input, (p:Person) => p.firstName === "Mr Flibble");
	assert(input.length === output.length, "Lists should be same size when no match on delete of an item.");
	assert(input === output, "Underlying reference should be the same when there is no match on deleting and item.");
	assert(input[0].firstName === output[0].firstName, "1st item still equal");
	assert(input[1].firstName === output[1].firstName, "2nd item still equal");
	assert(input[2].firstName === output[2].firstName, "3rd item still equal");
		
} // shouldAppendToList


function shouldUpdateNestedItem() {
	let p: Person = Person.createWithPartner("Fred", "Flintstone", "Homer", "Flintstone");
	
	let a: Person = ditto.updateItem(p, {
		partner: {
			firstName: "Bob"
		}	
	});

	assert(p !== a, "a and p should be different objects");
	assert(p.partner.firstName === "Homer", "Original name should be unchanged.")
	assert(a.partner.firstName === "Bob", "Partner's name should change");
	assert(p.partner.lastName === "Flintstone", "Parter's surname should not be changed.");
	
	// OK, single version works (surprised!), what about in arrays?
	let peeps: Array<Person> = new Array<Person>();

	peeps.push(
		Person.createWithPartner("Fred", "Flintstone", "Wilma", "Flintstone"),
		Person.createWithPartner("Barney", "Rubble", "Betty", "Rubble"),
		Person.createWithPartner("Homer", "Simpson", "Marge", "Simpson"),
		Person.createWithPartner("Bart", "Simpson", "Santas", "Little Helper")
	);

	// NAH! This kinda works, but go on the assumption it doesn't!
	if (false) {
		// 1 should be changed
		let changed: Array<Person> = ditto.updateList(peeps, (p: Person) => p.firstName == "Barney", {
			partner: {
				lastName: "Concrete"
			}
		});
		assert(peeps !== changed, "Changed should be a new object");
		assert(changed[1].partner.firstName === "Betty", "Partner first name should NOT be changed");
		assert(changed[1].partner.lastName === "Concrete", "Partner last name SHOULD be changed");
	}
	
	
} // shouldUpdateNestedItem


export function runTests(): void {
	console.log("running tests ...");
	
	// Single object tests
	shouldUpdateItem();
	
	// Array navigation tests
	canAny();
	canEmpty();
	canFirst();
	canLast();
	
	// Array tests
	shouldFindIndexOf();
	shouldUpdateList();	
	shouldAppendToList();
	shouldPrependToList();
	shouldDeleteItems();
	
	// Nested object tests
	shouldUpdateNestedItem();
	
	console.log("done running tests ...")
}

