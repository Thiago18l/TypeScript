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