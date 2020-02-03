//dependencies
var express = require("express");
var path = require("path");

//initialize express
var app = express();
//define port
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//global vars for all reservations and for waiting list
var reservations = [];
var waiting = [];

//routes
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
  console.log(path.join(__dirname, "index.html"));
});

app.get("/api/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});


app.post('/api/tables.html', function(req, res) {
  console.log(`Request: ${req}`);
  console.log(`Response: ${res}`);
})//app.post tables

//get /

//get /api/tables

//get /api/waitList


//starts server listening
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});