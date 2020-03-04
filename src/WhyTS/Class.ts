class Point {
    constructor(public x: number, public y: number){

    }
    add(point: Point){
        return new Point (this.x + point.x, this.y + point.y);
    }
}

let p1 = new Point(0, 10);
let p2 = new Point(10, 20);
let p3 = p1.add(p2); // ou seja adicionando 10, 20

console.log(p1, p2, p3);