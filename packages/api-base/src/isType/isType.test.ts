import * as util from './index';

describe('ts-util-is methods', () => {

    it('ensure value is an array', () => {
        expect(util.isArray([])).toBe(true);
    });

    it('ensure value is a Promise', () => {
        expect(util.isPromise(Promise.resolve('hello'))).toBe(true);
    });

    it('ensure value is a boolean', () => {
        expect(util.isBoolean(true)).toBe(true);
    });

    it('ensure value is a date', () => {
        expect(util.isDate(new Date())).toBe(true);
    });

    it('ensure value is a valid date', () => {
        expect(util.isDateValid(new Date('invalid'))).toBe(false);
    });

    it('ensure value is defined', () => {
        expect(util.isDefined(83)).toBe(true);
    });

    it('ensure value is an error', () => {
        expect(util.isError(new Error())).toBe(true);
    });

    it('ensure value is a function', () => {
        // tslint:disable-next-line:only-arrow-functions
        // tslint:disable-next-line:no-empty
        expect(util.isFunction(() => {})).toBe(true);
    });

    it('ensure value is null', () => {
        expect(util.isNull(null)).toBe(true);
    });

    it('ensure value is a number', () => {
        expect(util.isNumber(83)).toBe(true);
    });

    it('ensure value is an object', () => {
        expect(util.isObject({})).toBe(true);
    });

    it('ensure value is a string', () => {
        expect(util.isString('')).toBe(true);
    });

    it('ensure value is undefined', () => {
        expect(util.isUndefined(undefined)).toBe(true);
    });

});
