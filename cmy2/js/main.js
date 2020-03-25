$(function () {
    //script for popups
    $('a.show_popup').click(function () {
        $('div.'+$(this).attr("rel")).fadeIn(500);
        $("body").append("<div id='overlay'></div>");
        $('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
        return false;
    });
    $('a.close').click(function () {
        $(this).parent().fadeOut(300);
        setTimeout(function() {
            $('#overlay').remove('#overlay');
        }, 150);
        return false;
    });
    // бургер меню
    $('.section').on('click', function (){
        $('.menu__list').slideToggle();
    });
    //анимация для стрелочек меню
    $('.menu-btn').on('click', function(e) {
        e.preventDefault;
        $(this).toggleClass('menu-btn_active');
    });
});
$(function(){
    $("#phone1").mask("8(999) 999-9999");
});
$(function(){
    $("#phone2").mask("8(999) 999-9999");
});
$(function () {
    $('a.news-bt').click(function() {
        $('.hidden').fadeIn(1000);
        $('.news-item').removeClass('closed');
        $(this).fadeOut(10);
    });
});
$(function () {
    $('.questions-bt').click(function () {
        $(".q-form").addClass('q-form-closed');
        $('.form-answer').removeClass('q-form-closed');

    });
});
    $(document).ready(function(){
        $('.gg').slick({
            // autoplay: true,
            // autoplaySpeed: 2000,
            // variableWidth: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            speed:1000,
            responsive: [
                {
                    breakpoint: 1110,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        infinite: true,
                        dots: true
                    }
                }
            ]
    });
    });
$(document).ready(function(){
    $('.payment__slider').slick({
        // autoplay: true,
        // autoplaySpeed: 3000,
        speed: 1000,
        infinite: true,
        arrows:false,
        dots: true
    });
});
