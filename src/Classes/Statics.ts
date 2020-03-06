class Something {
    static instance = 0;
    constructor(){
        Something.instance++;
    }
}

let s1 = new Something();
let s2 = new Something();
console.log(Something.instance); // will print 2;