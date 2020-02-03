//require express
var express = require("express");
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


//starts server listening
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});