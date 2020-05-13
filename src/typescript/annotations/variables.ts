let apple: number = 5;

apple = 10;

console.log(apple)


let speed: string = 'fast';
let hasName: boolean = true;
let nothing: null = null;
let nothingReally: undefined = undefined;

// Objects
let now: Date = new Date();

// Arrays
let colors: string[] = ['red', 'green', 'blue']
colors.map((value:string, index: number) => {
    console.log(`color ${index+1}: ${value}`)
})

let myNumbers: number[] = [1, 2, 3, 4, 5, 6, 7]
let truths: boolean[] = [true, false, true, false]

myNumbers.forEach((value: number) => {
    console.log(`My Numbers ${value}`)
})