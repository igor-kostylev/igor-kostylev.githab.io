$('.popular__slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});



// $('a[href*="#"]').on("click", function(e){
//     var anchor = $(this);
//     $('html, body').stop().animate({
//         scrollTop: $(anchor.attr('href')).offset().top
//     }, 777);
//     e.preventDefault();
//     return false;
// });


$('.hover_arrow').on('click', function (){
    $('.freelancers__border-user--profile').slideToggle();
});

$('.profile__main-reviews--menu_item, .submenu__item').click(function() {
    // получили дата атрибут
    var id = $(this).attr('data-id');

    // переключили полосочку
    $('.profile__main-reviews--menu_item, .submenu__item').removeClass('active');
    $(this).addClass('active');

    // переключили блок с контентом
    $('.block').removeClass('open');
    $('.block[data-id="' + id + '"]').addClass('open');
});

$('.price__menu-item').click(function() {
    // получили дата атрибут
    var id = $(this).attr('data-id');

    // переключили полосочку
    $('.price__menu-item').removeClass('price__menu-item_active');
    $(this).addClass('price__menu-item_active');

    $('.price__item').removeClass('price__item-open');
    $('.price__item[data-id="' + id + '"]').addClass('price__item-open');
});

var h_hght = 120; // высота шапки
var h_mrg = 0;     // отступ когда шапка уже не видна
$(function(){
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        var elem = $('.submenu');
        if (top+h_mrg < h_hght) {
            elem.css('top', (h_hght-top));
        } else {
            elem.css('top', h_mrg);
        }
    });
});
$(document).ready(function(){
    $('.slider__items').slick({
        // autoplay: true,
        // autoplaySpeed: 3000,
        speed: 600,
        infinite: true,
        arrows: true,
        slidesPerRow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>',
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 600,
        asNavFor: '.slider__items',
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true
    });
});

$('.faq__bord').click(function(){
    var id = $(this).attr('data-id');

    $('.faq__bord_sub[data-id="' + id + '"]').slideToggle();
});
