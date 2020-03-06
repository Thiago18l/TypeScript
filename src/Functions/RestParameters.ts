
const iTakeItAll = (first, second, ...Allothers) => {
     return console.log(Allothers);
}

iTakeItAll('First', 'Second') // output: [];
iTakeItAll('First', 'Second', 'Third', 'Fourth'); // output: ['Third', 'Fourth'];

