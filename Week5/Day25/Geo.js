var geocoder = require('geocoder');

var input = process.argv;
var location = [];
for(var i = 2; i < process.argv.length; i++){
    location.push(process.argv[i]);
}

console.log(JSON.stringify(location));

geocoder.geocode( location, function ( error , data ) {
    console.log(JSON.stringify(data, null, 2));
  });



// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)




// Take in the command line arguments




// Build your address as an array or string




// Then use Geocoder NPM to geocode the address