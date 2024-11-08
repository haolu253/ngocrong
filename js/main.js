$(document).ready(function () {
    // Hamburger mobile
    $('.hamburger').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active-menu');
        $('.side-menu').toggleClass('side-menu-active');
        $('body').toggleClass('no-scroll');
    });

    // Floating download
    $('.floating-download-before').on('click', function (e) {
        e.preventDefault();
        $('.floating-download').toggleClass('download-active');
    });

    // Floating to top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.floating-btn').addClass('visible');
        } else {
            $('.floating-btn').removeClass('visible');
        }
    });

    $('.go-top-btn').on('click', function (e) {
        e.preventDefault(); // Prevent any default behavior
        $('html, body').scrollTop(0);
    });
});
