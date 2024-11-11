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

    // Click event for selecting a planet
    $('.planet').on('click', function () {
        // Get the ID of the selected planet
        const selectedPlanetId = $(this).attr('id');
        const slickContainerId = `#${selectedPlanetId}-slick`;

        // Remove active class from all planets and add it to the clicked one
        $('.planet').removeClass('planet-active');
        $(this).addClass('planet-active');

        // Remove "planet-slick-active" from all slick containers
        $('.planet-slick').removeClass('planet-slick-active');

        // Add "planet-slick-active" to the selected slick container
        $(slickContainerId).addClass('planet-slick-active');

        // Check if the selected planet's slider is already initialized
        if (!$(slickContainerId).find('.planet-character-information').hasClass('slick-initialized')) {
            // Initialize Slick for planet-character-information
            $(slickContainerId + ' .planet-character-information').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: slickContainerId + ' .planet-character-thumb'
            });

            // Initialize Slick for planet-character-thumb
            $(slickContainerId + ' .planet-character-thumb').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: slickContainerId + ' .planet-character-information',
                dots: true,
                centerMode: true,
                focusOnSelect: true
            });
        }

        $(slickContainerId + ' .planet-character-information').slick('slickGoTo', 0);
        $(slickContainerId + ' .planet-character-thumb').slick('slickGoTo', 0);
    });

    // Initialize the default active planet (Earth)
    $('#earth').addClass('planet-active');  // Add active class to Earth by default
    $('.planet-slick').removeClass('planet-slick-active'); // Remove all active classes initially
    $('#earth-slick').addClass('planet-slick-active');     // Add active class to Earth slick by default

    // Initialize Earth Slick by default
    $('#earth-slick .planet-character-information').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#earth-slick .planet-character-thumb'
    });

    $('#earth-slick .planet-character-thumb').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#earth-slick .planet-character-information',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
});
