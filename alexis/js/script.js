$(function(){
	$('#hamburger_icon').on('click', function(){
		$('#menu').slideToggle(function(){
			$('#hamburger_icon').hide();
			$('#cross_icon').show();
		});
	});
	
	
	$('#cross_icon').on('click', function(){
		$('#menu').slideToggle(function(){
			$('#cross_icon').hide();
			$('#hamburger_icon').show();
		});
	});
  
	$('#testimonials_slider').slick({
		dots: false,
		arrows: false,
	});
	
	$(".testimonials__slider-dots-item").click(function(){
		let scrollTo = $(this).text();
		$('#testimonials_slider').slick('slickGoTo', scrollTo);
	});
  
    $("#testimonials_slider").on("beforeChange", function(){
		let currentPos = $('#testimonials_slider').slick('slickCurrentSlide');
		let arrayOfItems = document.getElementsByClassName("testimonials__slider-dots-item");
		arrayOfItems[currentPos].classList.remove("testimonials__slider-dots-item--active");
	});

	// add active
	$('#testimonials_slider').on('afterChange', function(){
		$(".testimonials__slider-dots-item").filter(function(){
			return $(this).text() == $('#testimonials_slider').slick('slickCurrentSlide');
		}).addClass("testimonials__slider-dots-item--active");
	});
  
	$('.team__block').on('click', function(){
		let arrayOfBlocks = document.querySelectorAll('.team__block');
		let arrayOfAbout = document.querySelectorAll('.team__about');
		let posOfClick;
		for(let i = 0; i < arrayOfBlocks.length; i++){
			if (arrayOfBlocks[i].classList.contains('team__block--active')){
				arrayOfBlocks[i].classList.remove('team__block--active');
			}
		}
		
		$(this).addClass('team__block--active');
		for(let i = 0; i < arrayOfBlocks.length; i++){
			if (arrayOfBlocks[i].classList.contains('team__block--active')){
				posOfClick = i;
			}
		}
		for(let i = 0; i < arrayOfAbout.length; i++){
			if (arrayOfAbout[i].classList.contains('team__about--active')){
				arrayOfAbout[i].classList.remove('team__about--active');
			}
		}
		arrayOfAbout[posOfClick].classList.add('team__about--active');
		
	});
    
//	$(".menu__item").click(function () {
//		let anchor = $(this).attr("href");
//		$("html, body").animate({
//			scrollTop: $(anchor).offset().top - 60
//		}, 500);
//	
//	});
//	
	$('#menu').click(function(event){
		let anchor = event.target.getAttribute('href');
		$("html, body").animate({
			scrollTop: $(anchor).offset().top
		}, 500);
	
	});
  
});

