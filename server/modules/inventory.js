var express = require('express');
var router = express.Router();

//array of inventory
var inventoryArray = [];

inventoryArray.push( {name: 'san', description: 'holo'});
inventoryArray.push( {name: 'peanut', description: 'butter jelly'});
inventoryArray.push( {name: 'fish', description: 'ships'});
inventoryArray.push( {name: 'meow', description: 'remix'});
console.log(inventoryArray);


//router syntax
router.get( '/', function(req, res){
  console.log('from inventory.js');
  res.send(inventoryArray); //when a get request is sent, respond with this
});

router.post('/add', function(req, res){
  console.log('in inventory post route: ', req.body);
  inventoryArray.push( req.body );
  res.send(200);
});

router.post( '/searchByName', function(req, res){
  console.log( 'in inventory/search by name: ', req.body);

  var matches = []; //array of matches to content sent from client.js
  //loop through items to search
  for (var i = 0; i < inventoryArray.length; i++) {
    if(inventoryArray[i].name.includes( req.body.name ) ){
      matches.push(inventoryArray[i]);
    }// end if. this looks through each item in the invetory and if it matches
    //what was sent from client.js, it pushes it into array called matches and
    //sends the match array back
  }
  //return match array to client.js
  res.send(matches);
});


router.post( '/searchByDescription', function(req, res){
  console.log( 'in inventory/search by description: ', req.body);

  var matches = []; //array of matches to content sent from client.js
  //loop through items to search
  for (var i = 0; i < inventoryArray.length; i++) {
    if(inventoryArray[i].description.includes( req.body.name ) ){
      matches.push(inventoryArray[i]);
    }// end if. this looks through each item in the invetory and if it matches
    //what was sent from client.js, it pushes it into array called matches and
    //sends the match array back
  }
  //return match array to client.js
  res.send(matches);
});

//export
module.exports = router;
