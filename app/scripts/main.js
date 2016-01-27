$( document ).ready(function() {
    console.log( "Created By: Jeremy Ferrer" );

    // Updates footer year incase someone forgets
    updateYear();

    // Toggle handler for slider
    $('.toggle').click(function(e) {
      var toggle = this;

      e.preventDefault();

      $(this).toggleClass('toggle--on')
        .toggleClass('toggle--off')
        .addClass('toggle--moving');

      setTimeout(function() {
        $(toggle).removeClass('toggle--moving');
      }, 200)

      $('.flip-container').toggleClass("flip");
      $('body').toggleClass('game')
      $('html, body').animate({ scrollTop: 20}, 'slow');
    });



});
function updateYear(){
  var currYear = new Date().getFullYear();
  $('.footer .year').text(currYear);
}
