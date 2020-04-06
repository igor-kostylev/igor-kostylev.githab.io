$(document).ready(function(){

    const menuNav = document.querySelector('.header__nav'),
        menuItem = document.querySelectorAll('header__nav_item'),
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

    $('.project-slider').slick({
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slider__prev"></div>',  // arrow replacement
        nextArrow: '<div class="slider__next"></div>',  // arrow replacement
    });

    $('.support-slider').slick({
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slider__prev"></div>',  // arrow replacement
        nextArrow: '<div class="slider__next"></div>',  // arrow replacement
    });
});