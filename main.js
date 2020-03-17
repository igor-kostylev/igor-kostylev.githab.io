
$(function(){
    $('.footnote').hover(
        function(){
            $('.portfolio__text_footnote').css('opacity', '1');
        },
        function() {
            $('.portfolio__text_footnote').css('opacity', '0');
        }
    )
});
