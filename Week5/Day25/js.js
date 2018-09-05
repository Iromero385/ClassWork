
var artist = (process.argv[3])
request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp", function(error, response, body) {

 // If the request is successful (i.e. if the response status code is 200)
 if (!error && response.statusCode === 200) {
    var listConcert = JSON.parse(body)
    console.log(listConcert.length)
   // for(var i=0; i<JSON.parse(body).length;i++){
       // console.log(JSON.parse(body)[i].venue.name)
       // console.log(JSON.parse(body)[i].venue.city)
       // console.log(JSON.parse(body)[i].datetime)
       //neets to beautify
   // }
    }

})
