const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    sumary(): string {
        return `Name: ${this.name}, 
                Year: ${this.year}, 
                Broken: ${this.broken}`
    }
}
interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
    sumary(): string;
}

const printVehicle = (vehicle: Vehicle): void => {
    console.log(`${vehicle.name}`)
    console.log(`${vehicle.year}`)
    console.log(`${vehicle.broken}`)
    console.log(vehicle.sumary())
}
printVehicle(oldCivic)