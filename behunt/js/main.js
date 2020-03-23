$(document).ready(function(){

    // slider in index.html
$('.popular__slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<div class="prev"></div>',  // arrow replacement
    nextArrow: '<div class="next"></div>',  // arrow replacement
});

// move through the submenu with anchors
// $('a[href*="#"]').on("click", function(e){
//     var anchor = $(this);
//     $('html, body').stop().animate({
//         scrollTop: $(anchor.attr('href')).offset().top
//     }, 777);
//     e.preventDefault();
//     return false;
// });

// animated disclosure user profile menu
$('.hover_arrow').on('click', function (){
    $('.freelancers__border-user--profile').slideToggle();
});

// switched the strip and content block
$('.profile__main-reviews--menu_item, .submenu__item').click(function() {
    // get attribute data
    var id = $(this).attr('data-id');

    // switched the strip
    $('.profile__main-reviews--menu_item, .submenu__item').removeClass('active');
    $(this).addClass('active');

    // switched the content block
    $('.block').removeClass('open');
    $('.block[data-id="' + id + '"]').addClass('open');
});

$('.price__menu-item').click(function() {
    // get attribute data
    var id = $(this).attr('data-id');

    // switched the strip
    $('.price__menu-item').removeClass('price__menu-item_active');
    $(this).addClass('price__menu-item_active');

    // switched the content block
    $('.price__item').removeClass('price__item-open');
    $('.price__item[data-id="' + id + '"]').addClass('price__item-open');
});


// pin submenu
var h_hght = 120; // submenu height
var h_mrg = 0;     // indentation when the submenu is no longer visible
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

//slider in service.html
$('.slider__items').slick({ //main slider
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    infinite: true,
    arrows: true,
    slidesPerRow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>',
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({ //side nav slider
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 600,
    asNavFor: '.slider__items',
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true
});

// animated block disclosure with a question
$('.faq__bord').click(function(){
    // get attribute data
    var id = $(this).attr('data-id');
    $('.faq__bord_sub[data-id="' + id + '"]').slideToggle(); // animated disclosure
});

});