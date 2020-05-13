const today = new Date();

today.getMonth()

const person = {
    age: 20
}

class Color {
    private color: string;
    constructor(color: string){
        this.color = color;
    }
    public getColor(): string{
        return this.color;
    }
}
const red = "Vermelho"
const color = new Color(red);

console.log(color.getColor())