interface Reportable {
    summary(): string;
}

const car = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `${this.name}`
    }
}
const printSummary = (item: Reportable): void => {
    console.log(item.summary())
}
printSummary(car)