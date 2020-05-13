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

// void and never

const logger = (message: string): void => {
    console.log(`my message is ${message}`)
}
console.log(logger("Oi lindos"))

const throwError = (message: string): never => {
    console.log(`${message}`)
    throw new Error(message) // Of course i'm throwing a new error...
}

console.log(throwError("ISSO É UM ERRO!"))
