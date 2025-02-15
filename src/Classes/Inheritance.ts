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

class Point3D extends Point{
    z: number;
    constructor(x: number, y: number, z: number){
        super(x, y);
        this.z = z;
    }
    add(point: Point3D){
        let Point2D = super.add(point);
        return new Point3D(Point2D.x + point.x, Point2D.y + point.y, this.z + point.z);
    }
}