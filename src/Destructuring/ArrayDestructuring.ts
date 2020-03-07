

// swap two values

let x = 1, y = 2;
[x, y] = [y, x]
console.log(x, y); // output: 2, 1

// destructuring an Array

const [ a, b, ...restante] = [2, 4, 6, 8, 10];

console.log(a, b, restante); // output: 2, 4, [6, 8, 10];

// destructuring an Array with ignores

const [ z, w, , ...remaining] = [3, 6, 9, 12, 14];

console.log(z, w, remaining); //output: 3, 6, [12, 14];