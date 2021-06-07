new WOW().init();
$('.project__slider').slick({
    arrows: true,
    slidesToShow: 2,
    // autoplay: true,
    // autoplaySpeed: 1000
});
$('.rent__title__description').slick({
    arrows: true,
    slidesToShow: 2,
    slidesToScroll:2,
    // autoplay: true,
    // autoplaySpeed: 1000
});


$('.burger').on('click', () => {
    $('.burger').toggleClass('show-menu');
    $('.header__items').toggleClass('show')
})
$('.header__items').on('click', () => {
    $('.burger').removeClass('show-menu');
    $('.header__items').removeClass('show')
})