import { sum } from "../src/sum";

// test function is global function, there are 2 parameter:
// 1. name test function
// 2. callback
test('test sum function', () => {

    const result    = sum(1,2);

    expect(result).toBe(3);

});


test('test sum function1', () => {

    const result    = sum(1,2);

    expect(result).toBe(3);

});

test('test sum function2', () => {

    const result    = sum(1,2);

    expect(result).toBe(3);

});

test('test sum function3', () => {

    const result    = sum(4,1);

    expect(result).toBe(5);

});

test('test sum function4', () => {

    const result    = sum(1,5);

    expect(result).toBe(6);

});


