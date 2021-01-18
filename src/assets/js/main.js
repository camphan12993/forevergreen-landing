window.onload = function () {
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 3,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

	var header = document.querySelector('header');
	var pathname = window.location.pathname;
	if (pathname == '/') {
		if (window.scrollY > 100) {
			header.classList.add('scrolled');
		}
		window.addEventListener('scroll', function () {
			header.classList.toggle('scrolled', window.scrollY > 100);
		});
	} else {
		header.classList.add('scrolled');
	}
};
