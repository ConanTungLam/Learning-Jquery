$( document ).ready(function() {

    function scrollToElement(){
      $('html').animate({scrollTop: 1900}, 1000);
    };

    $('ul.menu li.item').click(function() {
      scrollToElement();
      console.log('I am here.')
      });
    
});