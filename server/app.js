//required info and global variables
var express = require('express'); // initializing the use of express
var app = express(); // ** UNSURE
var path = require( 'path' ); // ** UNSURE
var bodyParser = require( 'body-parser' ); // calling body-parser to be used in document
var port = 8000; // setting up port number to listen for
var index = require('./modules/index.js');
var inventory = require('./modules/inventory.js');

// uses
app.use( express.static('server/public')); //sending back a static page and where to get it from
app.use( bodyParser.urlencoded( { extended: true} ));  //standard notation for using body-parser
app.use( '/', index); //added once i have an index.js module
app.use( '/inventory', inventory); //added once I have an inventory.js module


// get server running
app.listen( port, function(){
  console.log('server listening on port: ', port); // tells server to listen on this port and logs to dblcheck
});

//base url //where does the page go as a default?
// app.get ( '/', function( req, res ){
//     console.log( 'base url hit' );
//     res.sendFile( path.resolve( 'server/public/views/index.html' ) ); //moved this to index.js to handle all routes
// }); //end end base url

// ** set up index.js to replace this route ^ ^ **
