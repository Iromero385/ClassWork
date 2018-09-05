var TV = function() {
    var request = require('request')
    var fs = require('fs')
    this.findShow = function(show) {
      // The following URL can be used to search the TV Maze API for a given show
      var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
      request(URL,function(err,response,body){
        var data = JSON.parse(body)
        var newString = '\n'
        newString += ('Name: ' + data.name + '\n')
        newString += ('Genres: ' + data.genres + '\n')
        newString += ('Rating: ' + data.rating.average + '\n')
        newString += ('Network: ' + data.network.name + '\n')
        newString += ('Summary: ' + data.summary + '\n')
        fs.appendFile('log.txt',newString,function(){})
        console.log(newString)
  
      })
    };
    this.findActor = function(actor){
      var URL = "http://api.tvmaze.com/search/people?q=" + actor;
      
      request(URL,function(err,response,body){
        if(err){
          console.log(err)
          return
        }
        var data = JSON.parse(body)
        var newString = '\n'
        newString += ('Name: ' + data[0].person.name + '\n') 
        newString += ('Birthday: ' + data[0].person.birthday + '\n')
        newString += ('Gender: ' + data[0].person.gender + '\n')
        newString += ('Country: ' + data[0].person.country.name + '\n')
        newString += ('URL: ' + data[0].person.url + '\n')
        fs.appendFile('log.txt',newString,function(){})
        console.log(newString)
      })
    };
  
  };
  
  module.exports = TV;