const exampleBlock = document.querySelector(".example__interactive");
const beforeButton = exampleBlock.querySelector(".example__before");
const afterButton = exampleBlock.querySelector(".example__after");

beforeButton.addEventListener("click", function() {
  exampleBlock.classList.replace("example__interactive--after", "example__interactive--before");
});

afterButton.addEventListener("click", function() {
  exampleBlock.classList.replace("example__interactive--before", "example__interactive--after");
});


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
