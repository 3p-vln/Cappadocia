import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs'
const swiper = new Swiper('.swiper', {
	loop: true,
	
	autoplay: {
		delay: 3000,
	},
	
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});