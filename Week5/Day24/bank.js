var fs = require("fs");

var operation = process.argv[2];
var amount = process.argv[3];
var balance= 0;

fs.readFile("movies.txt", "utf8", function(error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }
  
    var array = data.split(", ").forEach((element) => {balance +=parseFloat(element);
    });
});

switch(operation){
    case "total":
        console.log(balance.toFixed(2));
        break;
    case "deposit":
        recordData(amount+ " ,");
        break;
    case "withdraw":
        recordData("-" + amount);
        break;
    case "lotto":
        var randNumber = Math.floor(Math.random()*10)
        if (randNumber == 5){
        recordData(1+" ,")
        }
        recordData("-.25 ,")
        break;
    default:
    console.log("i dont know what to do")

};

function recordData(amount){
    fs.appendFile(balance.txt, amount, function(err) {

        // If an error was experienced we will log it.
        if (err) {
          console.log(err);
        }
      
        // If no error is experienced, we'll log the phrase "Content Added" to our node console.
        else {
          console.log("Content Added!");
        }
      
      });

};
