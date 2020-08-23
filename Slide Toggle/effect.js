$(document).ready(function () {
    $('.content').slideUp();
    $('h3').click(function (e) { 
        $('.step').not($(this).parent())
            .find('.content').slideUp();
        $('h3').not(this).removeClass('selected');
        $(this).next('.content').slideToggle();
        $(this).toggleClass('selected');        
    });
});