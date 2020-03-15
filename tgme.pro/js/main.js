$('.subheader_menu-item').click(function() {
    // получили дата атрибут
    var id = $(this).attr('data-id');

    // переключили полосочку
    $('.subheader_menu-item').removeClass('subheader_menu__active');
    $(this).addClass('subheader_menu__active');

    // переключили блок с контентом
    $('.subheader-reg-block').removeClass('subheader-reg-block_open');
    $('.subheader-reg-block[data-id="' + id + '"]').addClass('subheader-reg-block_open');
});

$('.subheader_btn').click(function() {
    var text = $('.subheader_placeholder').val();

    // обработка ссылки
    text = text.replace('t.me', 'tgme.pro');
    text = text.replace('https://', '');

    // вставляем значение назад в инпут
    $('.subheader_placeholder').val(text);
});