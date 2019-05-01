function soundClick(event) {
    event.preventDefault();
    var audio = new Audio(); 
    audio.src = "audio/phone.wav"; 
    audio.autoplay = true; 
let night = document.querySelector('.logo img'); 
}$("#feedback_button").click(function() {
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