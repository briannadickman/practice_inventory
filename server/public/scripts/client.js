$(document).ready(function(){
  
//add event listeners to buttons
//add item button
$('#addItemButton').on("click", function(){
  console.log('Add Item Button Clicked!');
  //capture content and save it to inventory
  //assemble object to send
  var objectToSend = {
    name: $('#nameInAdd').val(), //use jquery to capture value(val();) in input area id (#nameInAdd)
    description: $('#descriptionInAdd').val()
  }; //create object that captures data to send to the server
  //make AJAX request(?) to post to server
  $.ajax({
    type: 'POST',
    url: '/inventory/add',
    data: objectToSend,
    success: function( response ) {
      console.log('back from adding item with: ', response);
      if( response === 'OK' ) {
        getInventory();
      } else {
        alert( 'cannot add item' );
      }
    }
  });
});

//clear search button
$('#clearSearchButton').on("click", function(){
  console.log('Clear Search Button Clicked!');
  //clear search form
  $( '#nameInSearch' ).val(''); //empties content in name search input
  $( '#descriptionInSearch' ).val(''); //empties content in description search input
  //get new inventory
  getInventory();
});

//clear add button content
$('#clearAddButton').on("click", function(){
  console.log('Clear Search Button Clicked!');
  //clear search form
  $( '#nameInAdd' ).val(''); //empties content in name search input
  $( '#descriptionInAdd' ).val(''); //empties content in description search input
  //get new inventory
  getInventory();
});

//search description button
$('#searchDescriptionButton').on("click", function(){
  console.log('Search Description Button Clicked!');
  //search inventory by description
  var objectToSend = {
    description: $( '#descriptionInSearch' ).val()
  };
  console.log('sending description: ', objectToSend);
  //send info to inventory
  $.ajax({
    type: 'POST',
    url: 'inventory/searchByDescription',
    data: objectToSend,
    success: function( response ){
      console.log('in inventory search by name, back with: ', response );
      displayInventory( response );
    }
  });
});

//search name button
$('#searchNameButton').on("click", function(){
  console.log('Search Name Button Clicked!');
  //search inventory by name
  //capture info in an object
  var objectToSend = {
    name: $( '#nameInSearch' ).val()
  };
  console.log('sending name: ', objectToSend);
  //send info to inventory
  $.ajax({
    type: 'POST',
    url: 'inventory/searchByName',
    data: objectToSend,
    success: function( response ){
      console.log('in inventory search by name, back with: ', response );
      displayInventory( response );
    }
  });
});

//FUNCTIONS to displayInventory and getInventory

function displayInventory( items ){ //used to display inventory on webpage by append to output div container
  console.log('in display inventory');
  //empty output here
  $( '.output').empty();
  //loop through items to append to div container
  for (var i = 0; i < items.length; i++) {
    $('.output').append('<p><b>' + items[i].name + '</b>:' + items[i].description + '</p>');
  }
}

function getInventory(){ //log inventory that is currently added
  console.log('in get inventory');
  //AJAX GET request
  $.ajax({ //ajax is a method() calling an object{}! object syntax here
    type: 'GET', //declaring type of ajax request. get something from server!
    url: '/inventory', //creating URL to connect to server
    success: function (response){ //on success, do this
      console.log('back from inventory with: ', response);
      displayInventory( response ); //on success, log and run the display inventory function
      //which goes through app.js and reroutes to inventory and responds with router.get function there
    }
  }); //end ajax get
}

getInventory();

}); //end document.ready
