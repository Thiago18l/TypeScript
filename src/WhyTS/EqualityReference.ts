

let foo = {} 
let bar = foo // bar is a reference
let baz = {} // baz is a new object distinct from `foo`

console.log(foo == bar); // true
console.log(foo == baz); // false