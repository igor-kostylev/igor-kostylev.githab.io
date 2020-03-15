//
// $(document).ready(function(){
//     $('.sl3').slick({
//         // autoplay: true,
//         // autoplaySpeed: 2000,
//         variableWidth: true,
//         infinite: true,
//         slidesPerRow: 2,
//         slidesToScroll: 1
// });
// });
$(document).ready(function(){
    $('.sl1').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        infinite: true,
        arrows: false,
        slidesPerRow: 1,
        slidesToScroll: 1,
        asNavFor: '.nav_slider'
    });
    $('.nav_slider').slick({
        slidesToShow: 3,
        asNavFor: '.sl1',
        focusOnSelect: true
    });
    $(".sl1").on('afterChange', function(event, slick, currentSlide){
        $("#cp1").text(currentSlide + 1);
    });
});
$(document).ready(function(){
    $('.sl2').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        infinite: true,
        arrows: true,
        slidesPerRow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear'
    });
    $(".sl2").on('afterChange', function(event, slick, currentSlide){
        $("#cp2").text(currentSlide + 1);
    });
});
$(document).ready(function(){
    $('.sl3').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        infinite: true,
        arrows: true,
        slidesPerRow: 1,
        slidesToScroll: 1,
        nextArrow: $('.next3')

    });
    $(".sl3").on('afterChange', function(event, slick, currentSlide){
        $("#cp").text(currentSlide + 1);
    });
});
