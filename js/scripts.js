/**
 * MenuButton Functionality
 */
document.addEventListener('DOMContentLoaded', function(){
	var menuButton = document.querySelector('.menu-button');
	
	menuButton.addEventListener('click', function(event){
		event.preventDefault();
		
		// Wechsel der nav-active Klasse im body Element und wechel des Icons
		if( document.body.classList.toggle('nav-active') == true ){
			menuButton.innerHTML = '<svg class="icon icon-close"><use xlink:href="#icon-close"></use></svg>';
		}else{
			menuButton.innerHTML = '<svg class="icon icon-menu"><use xlink:href="#icon-menu"></use></svg>';
		}
		
	});
});

/**
 * Seminare Slick Slider
 */
$(document).ready(function(){
	
	$('.seminare__slider').slick({
		infinite: false,
		draggable: false,
		touchMove: false,
		slidesToShow: 1,
		centerMode: true,
		centerPadding: '10%',
		prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><svg class="icon icon-keyboard_arrow_left"><use xlink:href="#icon-keyboard_arrow_left"></use></svg></button>',
		nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><svg class="icon icon-keyboard_arrow_right"><use xlink:href="#icon-keyboard_arrow_right"></use></svg></button>'
	});
	
	$('.seminare__slider').on('beforeChange', function( event, slick, currentSlide, nextSlide ){
		$('.seminare-tabs__item').removeClass('active');
		$('.seminare-tabs .seminare-tabs__item:eq('+nextSlide+')').addClass('active');
	});
	
});

function selectSeminar(int){
	$('.seminare__slider').slick('slickGoTo', int);
	
	var scrollTo = $('.seminare__slider').offset().top - ( $('.seminare-tabs').height() / 2 );
	
	if( $(document).scrollTop() < scrollTo ){
		$('html, body').animate({
			scrollTop: scrollTo
		}, 400);
	}
	
	return false;
}