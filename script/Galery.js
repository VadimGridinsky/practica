let night = document.querySelector('.logo img'); 
$("#feedback_button").click(function() {
    $("form").addClass('active');
    console.log('я сосал меня ебали');
});
$("#close_form").click(function() {
    $("form").removeClass('active');
});

$(night).on('click', function() {
    $("body,sup,sub,div.aside,div.big-map,div.small-map,p,div.about,div.home").toggleClass('night_on');
    
});
$(".image").click(function(element) {
let num = element.target.id;
$(this).css('backgroundImage', 'url(img/car'+num+'.jpg');
});
$('.right li').click(function() { 
    $('h1')[0].innerHTML = " Получи права бесплатно!" 
});

$(function() {
 
    $(window).scroll(function() {
     
    if($(this).scrollTop() != 0) {
    $('#toTop').fadeIn();
    } else {
    $('#toTop').fadeOut();
}
    });

    $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
    });
    });