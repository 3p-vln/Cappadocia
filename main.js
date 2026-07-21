import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs'

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
	if (window.scrollY > 20) {
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
	}
});

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