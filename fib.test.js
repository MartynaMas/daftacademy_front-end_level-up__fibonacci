const fib = require('./fib');

test('The function is defined', () => {
    expect(fib()).toBeDefined();
});

test('Fib is a function', () => {
    expect(typeof fib).toBe('function');
});

test('When the parameter is a string return "this is not a number"', () => {
    expect(fib('string')).toEqual('this is not a number');
});

test('When the parameter is a negative number return "this is not a natural number"', () => {
    expect(fib(-1)).toEqual('this is not a natural number');
});

test('When the parameter is not an integer return "this is not a natural number"', () => {
    expect(fib(2.5)).toEqual('this is not a natural number');
});

test('fib(0) should return an empty array', () => {
    expect(fib(0)).toEqual([]);
});

test('fib(8) should return [0, 1, 1, 2, 3, 5, 8, 13]', () => {
    expect(fib(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

test('length of the array and the parameter number should be the same', () => {
    expect(fib(38)).toHaveLength(38);
});