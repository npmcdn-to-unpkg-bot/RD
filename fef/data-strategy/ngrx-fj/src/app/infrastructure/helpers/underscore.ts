// TODO:
// 1. Change "UpdateList" to just "Update" - the array parameter should make it overloadable with the single "Update" version  


/**
 * Returns true if "o" is null or undefined
 * Returns false otherwise
 */
export function isNull(o: any): boolean {
	return !isPresent(o);
}

/**
 * Returns true if object "o" is not null (or undefined), i.e. there's a proper object there 
 * Returns false otherwise
 */
export function isPresent(o: any): boolean {
	return o !== undefined && o !== null;
}

/**
 * Returns true if "o" is undefined, null or any empty string
 * Returns false otherwise
 */	
export function isNullOrEmpty(o: string): boolean {
	if (isNull(o)) 
		return true;
	if (o === "")
		return true;
		
	return false;
}

/**
 * Returns true if "items" has any items in it
 */
export function any<T>(items: T[]): boolean {
	let hasItems: boolean = false;
	
	if (!isNull(items)) {
		if (items.length > 0) {
			hasItems = true;
		}
	}
	
	return hasItems;
}

/**
 * Returns the opposite of "any" 
 */
export function empty<T>(items: T[]): boolean {
	if (isNull(items))
		return true;
	
	return !any(items); 
}

/**
 * Returns last item in the list
 * Returns null if list is null/undefined, or the list is empty
 */
export function last<T>(items: T[]): T {
	let lastItem: T = null;
	
	if (any(items)) {
		lastItem = items[items.length-1];
	}
	
	return lastItem;
}


/**
 * Returns first item in the list
 * Returns null if the list null/undefined, or the list is empty
 */
export function first<T>(items: T[]): T {
	let firstItem: T = null;
	
	if (any(items)) {
		firstItem = items[0];
	}
	
	return firstItem
}


interface ObjectConstructor {
    assign(target: any, ...sources: any[]): any;
}

if (typeof Object.assign != 'function') {
  (function () {
    Object.assign = function (target) {
      'use strict';
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var output = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null) {
          for (var nextKey in source) {
            if (source.hasOwnProperty(nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
      }
      return output;
    };
  })();
}

