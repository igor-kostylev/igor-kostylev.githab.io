$(document).ready(function(){

    //parallax1
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
    //parallax2
var scene2 = document.getElementById('scene2');
var parallaxInstance2 = new Parallax(scene2);

    //popup
$('.popup-link').magnificPopup({
});

    //wow animation
new WOW().init();


    const menuNav = document.querySelector('.header__nav'),
        menuItem = document.querySelectorAll('.nav__item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menuNav.classList.toggle('header__nav_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menuNav.classList.toggle('header__nav_active');
        });
    });
});