class fooBase {
    public x: number;
    protected y: number;
    private z: number;
}

let foo = new fooBase();

foo.x; // will can access the atribute
foo.y; // ERROR because is protected
foo.z; // ERROR beacause is private

class fooChild extends fooBase{
    constructor(){
        super();
        this.x; // it's ok because x is public
        this.y; // it's ok because y is protected and the child can access the atributes of your parent
        this.z; // ERROR because z is private;
    }
}