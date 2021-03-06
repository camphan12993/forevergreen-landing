AOS.init();

var header = document.querySelector('header');
if (window.scrollY > 100) {
  header.classList.add('scrolled');
}
window.addEventListener('scroll', function () {
  header.classList.toggle('scrolled', window.scrollY > 100);
});

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

var pathname = window.location.pathname;
if (pathname.includes('projects')) {
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
      1024: {
        slidesPerView: 3,
        spaceBetween: 28,
      },
    },
  });

  var swiperLookbook = new Swiper('.swiper-lookbook', {
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
      1024: {
        slidesPerView: 3,
        spaceBetween: 28,
      },
    },
  });
}

var swiperSolution = new Swiper('.swiper-solutions', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var modal = document.querySelector('.modal');
var modalGallery = document.querySelector('.modal-gallery');
var modalDes = document.querySelector('.modal-description');
var body = document.querySelector('body');

function openModal(item, url) {
  var title = document.createElement('div');
  title.classList = 'pb-4 font-bold text-xl';
  title.innerText = item.name;
  modalDes.append(title);

  if (item.description) {
    if (item.description.length) {
      item.description.forEach((i) => {
        var e = document.createElement('p');
        e.classList = 'font-thin';
        e.innerText = i;
        modalDes.append(e);
      });
    }
  }
  var desHeight = modalDes.clientHeight;

  item.images.forEach((i) => {
    var e = document.createElement('img');
    e.classList = 'w-auto m-auto mb-10';
    e.src = url + i;
    e.alt = i;
    e.style.maxHeight = 'calc(100vh - ' + desHeight + 'px)';
    modalGallery.append(e);
  });

  modal.classList.add('active');
  body.style.overflow = 'hidden';
  modal.scrollTop = 0;
}

function closeModal() {
  modal.classList.remove('active');
  modalDes.innerHTML = '';
  modalGallery.innerHTML = '';
  body.style.overflow = 'auto';
}

function windowOnClick(event) {
  if (event.target == document.querySelector('.modal-content')) {
    closeModal();
  }
}

function setActiveCategory(projectId) {
  var categories = document.querySelectorAll('.categories');
  var listCategories = document.querySelector('#list-categories').children;
  for (i = 0; i < categories.length; i++) {
    if (categories[i].dataset.active == projectId) {
      categories[i].classList.remove('hidden');
    } else {
      categories[i].classList.add('hidden');
    }
  }

  for (i = 0; i < listCategories.length; i++) {
    if (i + 1 == projectId) {
      listCategories[i].classList.add('active');
    } else {
      listCategories[i].classList.remove('active');
    }
  }
}

if (document.location.pathname == '/') {
  setTimeout(function () {
    document.querySelector('#loading').classList.add('fade-out');
  }, 1500);
}

function setActiveMenu() {
  var menuItems = document.querySelector('#menu').children;
  var currentUrl = document.querySelector('#menu').dataset.url;
  if (currentUrl == '/') {
    menuItems[0].firstElementChild.classList.add('active');
  } else {
    for (let i = 1; i < menuItems.length; i++) {
      if (
        currentUrl.includes(menuItems[i].firstElementChild.getAttribute('href'))
      ) {
        menuItems[i].firstElementChild.classList.add('active');
      }
    }
  }
}

setActiveMenu();

window.addEventListener('click', windowOnClick);
