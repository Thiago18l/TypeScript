let objeto = { x:0, y: 10, width: 15, height: 20 }


const { x, y, width, height } = objeto;

console.log(x, y, width, height); //output: 0,10,15,20

// structure:
const obj = { "some property": "some value" }

//destructure
const { "some property": SomeProperty } = obj
console.log(SomeProperty === "some value"); // output: true