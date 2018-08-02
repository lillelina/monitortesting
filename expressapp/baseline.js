// neues repository: monitor-playground in github X
// express appX

// startups in einer globalen datenstruktur anlegen (dictionary)X
// var startups = ...X

// Startups lesen
// - Ein GET request auf /startups liefert alle startups als Json zurrückX

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

//Object Startup mit den Eigenschaft: id, name, email, PLZ


var figo = {
    id: "1",
    name: "figo",
    emai: "info@figo.de"
};

var Heymaker = {
    id: "2",
    name: "Heymaker",
    emai: "info@Heymaker.de"
    
};

var Sugarshape = { 
    id: "3",
    name: "Sugarshape",
    emai: "info@sugarshape.de"
};

var startupdata = [];

 var prepstartupdata = function(){
     startupdata.push(figo);
     startupdata.push(Heymaker);
     startupdata.push(Sugarshape);
 };


var startups = {1 : 'Figo', 2 : 'Heymaker', 3 : 'Sugarshape' }; 

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/startups/', function (req, res) {
    res.send(startupdata);
});

app.get('/startups/:id', function (req, res) {
    var findid = function(startup){
        if (startup.id == req.params.id) {
            res.send(startup)
        };
        
        };


        // get the id of current startup


        // vergleich

        // return startup or 404 if not found
        
    
    startupdata.forEach(findid);
    res.send('404 not found!')


    // loop over startup data
    // 

});

app.listen(3000, function () {
    prepstartupdata();
    console.log('Listining on Port 3000...')})