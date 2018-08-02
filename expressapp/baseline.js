// neues repository: monitor-playground in github
// express app

// startups in einer globalen datenstruktur anlegen (dictionary)
// var startups = ...

// Startups lesen
// - Ein GET request auf /startups liefert alle startups als Json zurrück

// Ein Startup lesen
// - Ein GET request auf /startups/:id liefert das jeweilige Startup mit der id zurück
//   - Oder einen 404 wenn es das Startup nicht in der Liste findet

// Startups loeschen
// Eine DELETE request auf /startups/id löscht das Startup aus der Liste// app.delete('/startups/:id/:name', function (req, res) {
//     TODO remove startup aus der globalen dictionary variable
//      TODO 200 senden wenn ok
//      TODO 404 senden wenn nicht ok
// })



var express = require('express');
var app = express();


var startups = {1 : 'Figo', 2 : 'Heymaker', 3 : 'Sugarshape' }; 

var findStartup = function(id) {
    // find the startup


    // return startup;
}

var removeStartup = function(id) {

}

//app.get(endpoint, /* function die gerufen werden soll wenn ein request an die url gesendet wird/*)

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/startups/', function (req, res) {
    var valuelist = [];
    
    var keys = Object.keys(startups); // keys of startups dictionary
    keys.forEach(function(key){

        var value = startups[key];

        valuelist.push(value);

    });
    res.send(valuelist);
});

app.get('/startups/:id/:name', function (req, res) {

    // findStartup()
    res.send(req.params);
});

app.listen(3000, function () {console.log('Listining on Port 3000...')})