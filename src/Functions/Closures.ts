var funcs = [];

for(var i = 0; i < 3; i++){

    funcs.push(function(){       
        console.log(i);
    })
}

for(var j = 0; j < 3; j++){
    funcs[j]();
}

// ES6

let funcs2 = [];
for(let i = 0; i < 3; i++){
    funcs2.push(function(){
        console.log(i);
    })
}
for(var j = 0; j < 3; j++){
    funcs2[j]();
}