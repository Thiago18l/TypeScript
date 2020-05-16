const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
}
interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
}

const printVehicle = (vehicle: Vehicle): void => {
    console.log(`${vehicle.name}`)
    console.log(`${vehicle.year}`)
    console.log(`${vehicle.broken}`)
}
printVehicle(oldCivic)