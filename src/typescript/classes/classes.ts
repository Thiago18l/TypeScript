class Vehicle {
    drive(): void {
        console.log(`Run...`)
    }
    beep(): void {
        console.log(`Beeep`)
    }
}
const vehicle = new Vehicle();
vehicle.drive()
vehicle.beep()

class Car extends Vehicle {
    private name: string;
    private placa: string;
    constructor(name: string, placa: string) {
        super();
        this.name = name;
        this.placa = placa;
    }
    getName(): string {
        return this.name;
    }
    getPlaca(): string {
        return this.placa;
    }
}

const carro = new Car("Corolla", "77777");
carro.beep()
console.log(carro.getName())
console.log(carro.getPlaca())