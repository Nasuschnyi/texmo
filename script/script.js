var swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 16,
	slidesPerView: 'auto',
	centeredSlides: true,
	grabCursor: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-arrow-next',
		prevEl: '.swiper-arrow-prev',
	},
});
