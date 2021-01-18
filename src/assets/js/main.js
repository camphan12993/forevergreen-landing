window.onload = function () {
	var swiper = new Swiper('.swiper-container', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			640: {
				slidesPerView: 2,
				spaceBetween: 28,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 28,
			},
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

function toggleMenu() {
	var mainNav = document.getElementById('nav-menu');
	mainNav.classList.toggle('active');
}
