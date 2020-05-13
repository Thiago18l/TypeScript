const add: (a:number, b: number) => number = (a: number, b: number) => {
    return a + b;
}
console.log(add(2, 2))

const mult = (a: number, b: number): number => {
    return a * b;
}

console.log(mult(4, 4))

function divide (a: number, b: number): number {
    return a / b
}
console.log(divide(4, 2))

// Anonymous function

const sub = function (a: number, b: number): number {
    return a - b;
}
console.log(sub(5, 3))

