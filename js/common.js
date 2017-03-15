$(document).ready(function() {

	//Подключение owlcarousel
	$(".owl-carousel").owlCarousel({
			loop:true,
			responsive : {
			        0 : {
			            items:1,
			            nav:true
			        }
			},
			navText: ""
		});
	//Запуск стеллар (параллакс-эффект)
	$.stellar({
		responsive: true,
		horizontalOffset: 60
	});
	//Изменение размеров фона шапки при изменении размера окна
	function windowResize(){
		$('header').css('min-height', $(window).height())
	};
	windowResize();
	$(window).resize(function(){
		windowResize();
	});

	//Модальные окна magnific popup
	$('.popup').magnificPopup({type:'image'});
	$('.popup_c').magnificPopup();

	//Переключатель вкладок c телефонами
	$(".top_phone .tab:first-child").addClass('active');
	$(".top_phone .tab_item").not(":first").hide();
	$(" .top_phone .tab").click(function() {
		$(".top_phone .tab").removeClass("active")
		.eq($(this).index()).addClass("active");
		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()})
		.eq(0).addClass("active");
	//Переключатель вкладок c телефонами в футере
	$(".bottom_phone .tab:first-child").addClass('active');
	$(".bottom_phone .tab_item").not(":first").hide();
	$(" .bottom_phone .tab").click(function() {
		$(".bottom_phone .tab").removeClass("active")
		.eq($(this).index()).addClass("active");
		$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()})
		.eq(0).addClass("active");
	//Переключатель вкладок со скидками
	$(".tabs_header .tab:first-child").addClass('active');
	$(".tabs_header .tab_item").not(":first").hide();
	$(".tabs_header .wrapper .tab").click(function() {
		$(".tabs_header .wrapper .tab").removeClass("active")
		.eq($(this).index()).addClass("active");
		$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()})
		.eq(0).addClass("active");
	//Переключатель вкладок с адресами
	$(".s_contacts .tab:first-child").addClass('active');
	$(".s_contacts .tab_item").not(":first").hide();
	$(".s_contacts .tab").click(function() {
		$(".s_contacts .tab").removeClass("active")
		.eq($(this).index()).addClass("active");
		$(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()})
		.eq(0).addClass("active");


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		var ths = $(this);
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance;
				magnificPopup.close();
				ths.trigger('reset');
			}, 1000);
		});
		return false;
	});

});

$(window).load(function() {
	//Анимация элементов на странице
	$(".top_header h1").animated("fadeInDown", "fadeInDown");
	$(".top_header h2").animated("fadeInUp", "fadeInUp");
	$(".tabs_header .wrapper").animated("flipInY", "flipInY");
	$(".prof_item").animated("fadeInRight", "fadeInRight");
	$(".s_prof form").animated("zoomInRight", "zoomInRight");
	$(".s_back h3").animated("fadeInUp", "fadeInUp");
	$("footer").animated("fadeIn", "fadeIn");
});
