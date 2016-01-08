$( document ).ready(function() {
    console.log( "Created By: Jeremy Ferrer" );

    // Updates footer year incase someone forgets
    updateYear();




});
function updateYear(){
  var currYear = new Date().getFullYear();
  $('.footer .year').text(currYear);
}
