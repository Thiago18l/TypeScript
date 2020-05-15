/**
 * array-like structure where each element represent some 
 * property of a record
 */


 const drink = {
     color: 'blue',
     carbonated: true,
     sugar: 40
 }
 // type alias
type Drink = [string, boolean, number]
const coke: Drink = ['blue', true, 40]
const pepsi: Drink = ['clear', true, 40]
const tea: Drink = ['brown', true, 40]