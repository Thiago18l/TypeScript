

const foo = (x:number, y:number, z: number) => {
    return x + y + z;
};
const args = [2, 6, 9];

foo(args[0], args[1], args[2]); // bad way
console.log(foo(...args)); // output: 17;
