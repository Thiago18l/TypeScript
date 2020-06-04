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