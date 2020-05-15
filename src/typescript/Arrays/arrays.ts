
const carMakers: string[] = ['ford', 'toyota', 'chevrolet'];
const dates: Date[] = [new Date(), new Date()]


const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['onix']
]

console.log(carMakers) // output: 'ford', 'toyota', 'chevrolet'

// help with inference when extracting values

const car = carMakers[0]
const myCar = carMakers.pop() // pop removes the last element of an array and return it;
console.log(myCar)

carMakers.map((car: string): string => {
    return car.toUpperCase();
})

// multiple types in arrays

const importantDate: (string | Date)[] = [new Date(), '2020-05-15']
console.log(importantDate)