$(function(){
$('.partners-slider').slick({
    	arrows: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			autoplay: true,
  		autoplaySpeed: 2000,
			draggable: true,
			swipe: false,
			prevArrow: '<div class="slider-left"></div>',
			nextArrow: '<div class="slider-right"></div>',
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						arrows: true,
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						swipe: true,
						arrows: true,
						autoplay: false,
						infinite: true,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						swipe: true,
						arrows: true,
						autoplay: false,
						infinite: true,
					}
				}
			]
})

});