import * as deepEqual from 'deep-equal';

console.log({a: 123} == {a: 123}) // false
console.log({a: 123} === {a: 123}) // false

// With DeepEqual

console.log(deepEqual({a:123},{a: 123})); // true

