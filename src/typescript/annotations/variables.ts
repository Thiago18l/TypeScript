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

//classes

class Car {
    private carName: string;
    private model: string;
    constructor (carName: string, model: string){
        this.carName = carName;
        this.model = model;
    }
    public getCarName() {
        return this.carName;
    }
    public getModel() {
        return this.model;
    }

}
let car1: Car = new Car("Fiesta", "Sedan")
console.log(`My car is a ${car1.getCarName()} 
            and the model is a ${car1.getModel()}`)

// Object Literals
let point: { x:number, y:number } = {
    x: 10,
    y: 20
}
console.log(point.x, point.y)

// Functions

const logNumber: (i: number) => void = (i: number) => { //(i:number) é o que ele espera receber, => é o retorno
    console.log(i)
}

logNumber(25)

// When to use annotations:
// 1. Functions that returns the 'any' type

const json: string = '{"x": 10, "y": 20}'
const coordinates: { x: number, y: number } = JSON.parse(json)
console.log(coordinates)

// 2. WHen we declare a variable on one line
// and initializate it later

let words = ['red', 'green', 'blue']
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}
console.log(`Is true? ${foundWord}`)

// 3. Variables whose type cannot be inferred correctly
let numbers = [-10, -20, 2]
let numberAboveZero: boolean | number = false; // bad code... don't do this please!
for (let i = 0; numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i]
    }
}
console.log(`${numberAboveZero}`)
