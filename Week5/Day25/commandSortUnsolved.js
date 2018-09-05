var array = process.argv;
var numberArray = [];
for (var i = 2 ; i < process.argv.length; i++){

    numberArray.push(parseInt(process.argv[i]));
}

numberArray.sort( (a,b)=>a-b);
console.log(numberArray);