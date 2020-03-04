interface Point2D {
    x: number;
    y: number;
}
interface Point3D {
    x: number;
    y: number;
    z: number;
}

let point2D: Point2D = { x: 0, y:10 }
let point3D: Point3D = { x: 0, y: 20, z: 30 }

function iTakePoint2D(point: Point2D) {
    return console.log(point.x, point.y);
}

iTakePoint2D(point2D); // exact match is ok
iTakePoint2D(point3D); // extra information is ok
// iTakePoint2D({ x: 0 }) // vai dar erro por estar faltando a info `y`;
iTakePoint2D({ x: 10, y: 25 }) // Correct 