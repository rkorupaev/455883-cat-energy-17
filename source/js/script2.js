const mainNav = document.querySelector(".main-nav");
const togglerButton = mainNav.querySelector(".main-nav__toggler");

mainNav.classList.remove("main-nav--nojs");


togglerButton.addEventListener('click', function() {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
  }
});
