$( document ).ready(function() {
  var n = 6;
    $('html').animate({scrollTop: 0}, 2000);
    $('ul.menu li.item:nth-child(1)').click(function() {
      $('html').animate({scrollTop: $('div.block:nth-child(2)').offset().top}, 1000);
      $('div').removeClass('selected');
      $(this).addClass('selected')
      });
    $('ul.menu li.item:nth-child(2)').click(function() {
      $('html').animate({scrollTop: $('div.block:nth-child(3)').offset().top}, 1000);
      $('div.block').removeClass('selected');
      $(this).addClass('selected')
      });
    $('ul.menu li.item:nth-child(3)').click(function() {
      $('html').animate({scrollTop: $('div.block:nth-child(4)').offset().top}, 1000);
      $('div.block').removeClass('selected');
      $(this).addClass('selected')
      });
    $('ul.menu li.item:nth-child(4)').click(function() {
      $('html').animate({scrollTop: $('div.block:nth-child(5)').offset().top}, 1000);
      $('div.block').removeClass('selected');
      $(this).addClass('selected')
      });
    $('ul.menu li.item:nth-child(5)').click(function() {
      $('html').animate({scrollTop: $('div.block:nth-child(6)').offset().top}, 1000);
      $('div.block').removeClass('selected');
      $(this).addClass('selected')
      });
    $('ul.menu li.item:nth-child(6)').click(function() {
        $('html').animate({scrollTop: $('div.block:nth-child(7)').offset().top}, 1000);
        $('div.block').removeClass('selected');
        $(this).addClass('selected')
        });
    $('.backToTop').click(function() {
      $('html').animate({scrollTop: 0}, 2000);
      });
    
});