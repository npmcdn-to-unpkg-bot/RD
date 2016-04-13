/**
 * Module: "ditto" (coz the module delivers new objects, and uber [kinda used to] sounds cool!)
 * Description: Set of [generic] helper methods for doing [very simple!] immutable type for TypeScript/ES6
 * Tests: See set of noddy tests at ????
 * Usage: 
 * 	"import * as ditto from './ditto';"
 *  ...
 *  ditto.updateItem( ... )
 */

/**
 * Returns a copy of the given item, applying any updates.
 * @param current - Object to return an updated version of
 * @param updates - Set of JSON updates to applies to the object copy
 */
export function updateItem<T>(current: T, updates: any): T {
	let newItem: T = null;
	
	newItem = Object.assign({}, current, updates);
		
	return newItem;
}


/**
 * Returns position in the array of the item found by the predicate.
 * @param items - Array to search
 * @param predicate - function to evaluate which item in the array to find the position of
 */
export function indexOf<T>(items: Array<T>, predicate: (value: T) => boolean) {
	return items.findIndex(predicate);
}


/**
 * Returns true if there are any items in the given list 
 * Returns false if there are none (including if the list is null/undefined)
 * @param items - Array to check 
 */
export function any<T>(items: Array<T>): boolean {
	if (isNull(items))
		// might be null, but there still aren't any items!
		return false;
	
	return items.length > 0;
}


/**
 * Returns true if there are no items in the array (including null/undefined)
 * Returns false if there are items in the array
 */
export function empty<T>(items: Array<T>): boolean {
	if (isNull(items))
		return true;
		
	return items.length === 0;
}


/**
 * Returns the last item in the array (if there are any items)
 * Returns null if there are no items
 * @param items - Array to check 
 */
export function last<T>(items: Array<T>): T {
	if (any(items)) {
		return items[items.length-1];
	}
	
	return null;
}


/**
 * Returns first item in the array (if there are any items)
 * Returns null if there are no items
 * @param items - Array to check 
 */
export function first<T>(items: Array<T>): T {
	if (any(items)) {
		return items[0];
	}
	
	return null;
}


/**
 * Returns a new copy of the given array of items, replacing the item at "index" with
 * the new item, applying an defined updates.
 * @param items - Array we're updating
 * @param predicate (number) - When "predicate" is a number, the position in the array is used
 * @param predicate (callback) - When "predicate" is a callback, it's executed and the returned item used
 * @param itemUpdates - Changes to the object to apply (i.e. the updates we're making!)  
 */
export function updateList<T>(items: Array<T>, predicate: any, itemUpdates: any = null): Array<T> {
	let newList: Array<T> = new Array<T>();
	let index: number = 0;
	let newItem: T = null;
	let replacement: T = newItem;
	
	if (typeof predicate === "number") {
		index = Number(predicate);
	} else {
		index = indexOf(items, predicate);
	}
	
	newItem = items[index];

	// make a pure copy of the original list
 	newList.push(...items);

	if (!isNull(itemUpdates)) {
		replacement = updateItem(newItem, itemUpdates);
	}
	 
	// replace the affected item
	newList.splice(index, 1, replacement);
	
	return newList;	
}


/**
 * Returns a new array copy with "itemToAdd" appended to the end of the array.
 * @param items - Array to add an item to
 * @param itemToAdd - Item to add to the end of the array
 */
export function append<T>(items: Array<T>, itemToAdd: T): Array<T> {
	let newList: Array<T> = new Array<T>();
	newList.push(...items, itemToAdd);
	return newList;
}


/**
 * Returns a new array copy with "itemToInsert" at the start of the array.
 * @param items - Array to insert the item into
 * @param itemToInsert - Item to insert at the start of the array 
 */
export function prepend<T>(items: Array<T>, itemToInsert: T): Array<T> {
	let newList: Array<T> = new Array<T>();
	newList.push(itemToInsert, ...items);
	return newList;
}

	
/**
 * Returns a new array with 'n' items deleted.
 * @param items - Array to have elements removed from.
 * @param predicate (number) - When "predicate" is a number, the position in the array is used
 * @param predicate (callback) - When "predicate" is a callback, it's executed and the returned item used
 */
export function deleteItems<T>(items: Array<T>, predicate: any) {
	let deletedItems: Array<T> = new Array<T>();
	let index: number = 0;
	
	if (typeof predicate === "number") {
		index = Number(predicate);
	} else {
		index = indexOf(items, predicate);
	}
	
	if (index === -1) {
		// no match, no change was made to the list, so send back the original
		// ... this should prevent ui updates (e.g. ag2 OnPush) when no changes have happened
		return items;
	}
	
	// make a pure copy of the original list
	deletedItems.push(...items);
	
	// delete the offending index
	deletedItems.splice(index, 1);
	
	return deletedItems;
}


/** Helpers */

/**
 * Returns true if "o" is null or undefined
 * Returns false otherwise
 */
function isNull(o: any): boolean {
	return !isPresent(o);
}

/**
 * Returns true if object "o" is not null (or undefined), i.e. there's a proper object there 
 * Returns false otherwise
 */
function isPresent(o: any): boolean {
	return o !== undefined && o !== null;
}

