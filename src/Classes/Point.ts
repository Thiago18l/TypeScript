class Point {
    x: number
    y: number
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
    add(point: Point){
        return new Point (this.x + point.x, this.y + point.y);
    }
}

let point1 = new Point(0, 10);
let point2 = new Point(20, 30);
let point3 = point1.add(point2);

console.log(point1, point2, point3);


// in ES5 emit:

let Point = (function(){
    function Point (x, y){
        this.x = x;
        this.y = y;
    }
    Point.prototype.add = function(point){
        return new Point(this.x + point.x, this.y + point.y);
    };
    return Point;
});