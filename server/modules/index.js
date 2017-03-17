//creating an index.js module
  // ** why? What is the long term purpose of this?

// required set up for creating a router for website and global variables
var express = require('express');
var router = express.Router();
var path = require('path');

//routes
  // rerouting base url here. removes this from the app.js(server), and puts it through router
router.get( '/', function( req, res ){
  console.log( 'base url hit index.js router');
  res.sendFile(path.resolve('server/public/views/index.html'));
}); //end router for index.html

//export module
module.exports = router;
