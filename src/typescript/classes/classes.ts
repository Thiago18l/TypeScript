class Vehicle {
    color: string;
    
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

class Animal {
    private specie: string;
    private health: boolean;

    constructor (specie: string, health: boolean) {
        this.health = health;
        this.specie = specie;
    }
    public getSpecie (): string {
        return this.specie;
    }
    public getHealth (): boolean {
        return this.health;
    }
}

class Dog extends Animal {
    constructor (specie: string, health: boolean) {
        super(specie, health);
    }
    private DogCondition (): string {
        if (!this.getHealth()) {
            return `The condition of animal is awful`
        }
        return `The health condition of dog is good!`
    };
    public Condition (): string {
        return this.DogCondition();
    }
}

const lexie = new Dog("Dog", true);
console.log(lexie.Condition());