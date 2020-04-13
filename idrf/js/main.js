$('.speech__slider').slick({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slider__prev"></div>',  // arrow replacement
    nextArrow: '<div class="slider__next"></div>',  // arrow replacement
    responsive: [
        {
            breakpoint: 1281,
            settings: {
                // arrows: false,
                // centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 2
            }
        }
    ]
});

$('.speech__slider2_wrapper').slick({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<div class="slider__prev"></div>',  // arrow replacement
    nextArrow: '<div class="slider__next"></div>',  // arrow replacement
    responsive: [
        {
            breakpoint: 1281,
            settings: {
                // arrows: false,
                centerMode: true,
                centerPadding: '120px',
                // slidesToShow: 2
            }
        }
    ]
});

$('.banner__slider').slick({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="slider__prev"></div>',  // arrow replacement
    nextArrow: '<div class="slider__next"></div>',  // arrow replacement
});

$('.brand__slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    prevArrow: '<div class="slider__prev"></div>',  // arrow replacement
    nextArrow: '<div class="slider__next"></div>',  // arrow replacement
});