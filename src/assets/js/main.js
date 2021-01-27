window.onload = function () {
	const options = {
		/* check next step for available options */
	};
	AOS.init();

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
	if (window.scrollY > 150) {
		header.classList.add('scrolled');
	}
	window.addEventListener('scroll', function () {
		header.classList.toggle('scrolled', window.scrollY > 150);
	});
};

var currentList = [];

function toggleMenu() {
	var mainNav = document.getElementById('nav-menu');
	mainNav.classList.toggle('active');
}
var modal = document.querySelector('.modal');
var body = document.querySelector('body');

var pathname = window.location.pathname;
if (pathname.includes('projects')) {
	var colc = new Colcade('.projects', {
		columns: '.grid-col',
		items: '.grid-item',
	});
}

function openModal(images) {
	images.forEach((i) => {
		var e = document.createElement('img');
		e.classList = 'w-full';
		e.src = i;
		e.alt = i;
		currentList.push(e);
		modal.append(e);
	});
	modal.classList.add('active');
	body.style.overflow = 'hidden';
	modal.scrollTop = 0;
}

function closeModal() {
	modal.classList.remove('active');
	currentList.forEach(function (e) {
		e.remove();
	});
	body.style.overflow = 'auto';
}

function windowOnClick(event) {
	if (event.target == modal) {
		closeModal();
	}
}

window.addEventListener('click', windowOnClick);
