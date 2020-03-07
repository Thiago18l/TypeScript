let someArray = [2, 9, 12]

for(let item in someArray){
    console.log(item) // output: 0,1,2 ou seja os indices...
}

// correct way

for(let item of someArray){
    console.log(item) // output: 2,9,12 now the values will be print
}