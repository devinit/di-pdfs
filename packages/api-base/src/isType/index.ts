/**
 * Partially Adopted and modified from https://github.com/justinlettau/ts-util-is
 */
/**
 * Determines if a reference is an `Array`.
 *
 * @param value Reference to check.
 */
export function isArray(value: any): value is any[] {
    return Array.isArray(value);
}

export function isPromise(value: any): boolean {
    return value instanceof Promise;
}

/**
 * Determines if a reference is a `Boolean`.
 *
 * @param value Reference to check.
 */
export function isBoolean(value: any): value is boolean {
    return typeof value === 'boolean';
}

/**
 * Determines if a reference is a `Date`.
 *
 * @param value Reference to check.
 */
export function isDate(value: any): value is Date {
    return Object.prototype.toString.call(value) === '[object Date]';
}

/**
 * Determines if a reference is a valid `Date`.
 *
 * @param value Reference to check.
 */
export function isDateValid(value: any): value is Date {
    return isDate(value) && !isNaN(value.getTime());
}

/**
 * Determines if a reference is defined.
 *
 * @param value Reference to check.
 */
export function isDefined(value: any): boolean {
    return typeof value !== 'undefined';
}

/**
 * Determines if a reference is an `Error`.
 *
 * @param value Reference to check.
 */
export function isError(value: any): value is Error {
    return Object.prototype.toString.call(value) === '[object Error]' || value instanceof Error;
}

/**
 * Determines if a reference is a `Function`.
 *
 * @param value Reference to check.
 */
// tslint:disable-next-line:ban-types
export function isFunction(value: any): value is Function {
    return typeof value === 'function';
}

/**
 * Determines if a reference is `null`.
 *
 * @param value Reference to check.
 */
export function isNull(value: any): value is null {
    return value === null;
}

/**
 * Determines if a reference is a `Number`.
 *
 * @param value Reference to check.
 */
export function isNumber(value: any): value is number {
    return typeof value === 'number';
}

/**
 * Determines if a reference is an 'Object'.
 *
 * @param value Reference to check.
 */
// tslint:disable-next-line:ban-types
export function isObject(value: any): value is Object {
    return typeof value === 'object';
}

/**
 * Determines if a reference is a `String`.
 *
 * @param value Reference to check.
 */
export function isString(value: any): value is string {
    return typeof value === 'string';
}

/**
 * Determines if a reference is `undefined`.
 *
 * @param value Reference to check.
 */
export function isUndefined(value: any): value is undefined {
    return typeof value === 'undefined';
}
