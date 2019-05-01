var lastResFind=""; 
var copy_page=""; 
function TrimStr(s) { // обрезание пробелов
     s = s.replace( /^\s+/g, '');
  return s.replace( /\s+$/g, '');
}
function FindOnPage(inputId) {
  var obj = window.document.getElementById(inputId);
  var textToFind;
  
  if (obj) {
    textToFind = TrimStr(obj.value);
  } else {
    alert("Введенная фраза не найдена");
    return;
  }
  if (textToFind == "") {
    alert("Вы ничего не ввели");
    return;
  }
   
  if(document.body.innerHTML.indexOf(textToFind)=="-1")
  window.location.href = "https://yandex.ru/"
   
  if(copy_page.length>0)
        document.body.innerHTML=copy_page;
  else copy_page=document.body.innerHTML;
 
   
  document.body.innerHTML = document.body.innerHTML.replace(eval("/name="+lastResFind+"/gi")," ");
  document.body.innerHTML = document.body.innerHTML.replace(eval("/"+textToFind+"/gi"),"<a name="+textToFind+" style='background:yellow'>"+textToFind+"</a>"); //Заменяем найденный текст ссылками с якорем
  lastResFind=textToFind; 
  window.location = '#'+textToFind;
}
let night = document.querySelector('.logo img'); 
$("#feedback_button").click(function() {
    $("form").addClass('active');
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