let hamburger = document.querySelector('.hamburger-menu');
let menuLinks = document.querySelector('.menu-links');
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    menuLinks.classList.toggle('open');
});