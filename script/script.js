var swiper = new Swiper('.comments-swiper', {
	slidesPerView: 1,
	spaceBetween: 16,
	slidesPerView: 'auto',
	centeredSlides: true,
	grabCursor: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
