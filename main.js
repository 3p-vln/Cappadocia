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

const validate = new window.JustValidate('.form__contact');

validate
	.addField('.form__name', [
		{
			rule: 'required',
			errorMessage: `Введіть ваше ім'я`,
		},
		{
			rule: 'minLength',
			value: 2,
			errorMessage: `Довжина ім'я повинна бути більше 1 літери`,
		},
		{
			rule: 'maxLength',
			value: 50,
			errorMessage: `Довжина ім'я повинна бути менше`,
		},
		{
			rule: 'customRegexp',
			value: /^[\p{L}’'\-]+$/u,
			errorMessage: `Допускаються тільки літери, апостроф та дефіс`,
		},
	])
	.addField('.form__phone', [
		{
			rule: 'required',
			errorMessage: 'Введіть номер телефону',
		},
		{
			validator: (value) => {
				const phone = value.replace(/\D/g, '');
				
				return (
					/^380\d{9}$/.test(phone) ||
					/^0\d{9}$/.test(phone)
				);
			},
			errorMessage: 'Введіть коректний номер телефону',
		},
	]);