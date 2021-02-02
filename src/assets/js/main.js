AOS.init();

var header = document.querySelector('header');
if (window.scrollY > 150) {
  header.classList.add('scrolled');
}
window.addEventListener('scroll', function () {
  header.classList.toggle('scrolled', window.scrollY > 150);
});

var currentList = [];
var myIndex = 0;

function carousel() {
  var i;
  var x = document.getElementsByClassName('banner-slide');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = 'block';
  setTimeout(carousel, 6000);
}

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
} else if (pathname == '/') {
  carousel();
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
}

function openModal(images, url) {
  images.forEach((i) => {
    var e = document.createElement('img');
    e.classList = 'w-full';
    e.src = url + i;
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

setTimeout(function () {
  document.querySelector('#loading').classList.add('fade-out');
}, 1500);

window.addEventListener('click', windowOnClick);
