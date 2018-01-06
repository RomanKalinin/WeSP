//----------   Выделение пункта меню при скроллинге   ----------
/*
1. Надо учесть высоту элемента #menu2-3
2. Надо разобраться с кодом в качестве определения положения для target.position и т.п.
3. При применении с Mobirise требуется включать секции в более крупные, соотвествующие пунктам меню.
*/
var menu_selector = "#menu2-3"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
var menu_height = $(" .navbar").outerHeight();
$(window).scroll(function(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top - menu_height <= scroll_top && target.position().top + target.outerHeight() - menu_height > scroll_top) {
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
});
 
 

//----------   Удаление класса hidden в элементе с определённым ID и вложенных в него элементах   ----------
/*
	Решает проблему при использовании вызова модального окна в Mobirise: 
	при обновлении страницы некоторые элементы модального окна получали класс hidden и не отображались
*/
$('#myModal').on('show.bs.modal', function () {	//вызов перед появлением модального окна
$(this).find(".hidden").removeClass('hidden');	//поиск элементов с классом hidden и удаление этого класса
})

$('#privacyPolicy').on('show.bs.modal', function () {
$(this).find(".hidden").removeClass('hidden');
})

