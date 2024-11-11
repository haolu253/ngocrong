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

    // Function to initialize Slick carousels
    const initializeSlick = (slickContainerId) => {
        if (!$(slickContainerId).find('.planet-character-information').hasClass('slick-initialized')) {
            // Initialize Slick for planet-character-information
            $(slickContainerId + ' .planet-character-information').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
            });
        }
    };

    // Function to check screen width and initialize Slick if needed
    const initSlickOnResize = () => {
        if ($(window).width() < 992) {
            $('.planet-slick').each(function () {
                const slickContainerId = `#${$(this).attr('id')}`;
                initializeSlick(slickContainerId);
            });
        }
    };

    // Click event for selecting a planet
    $('.planet').on('click', function () {
        const selectedPlanetId = $(this).attr('id');
        const slickContainerId = `#${selectedPlanetId}-slick`;

        // Remove active class from all planets and add it to the clicked one
        $('.planet').removeClass('planet-active');
        $(this).addClass('planet-active');

        // Remove "planet-slick-active" from all slick containers
        $('.planet-slick').removeClass('planet-slick-active');

        // Add "planet-slick-active" to the selected slick container
        $(slickContainerId).addClass('planet-slick-active');

        // Initialize Slick only if the screen width is smaller than 992px
        if ($(window).width() < 992) {
            initializeSlick(slickContainerId);
        }

        // Reset the active slide to the first slide (index 0)
        $(slickContainerId + ' .planet-character-information').slick('slickGoTo', 0);
    });

    // Initialize the default active planet (Earth)
    $('#earth').addClass('planet-active');  // Add active class to Earth by default
    $('.planet-slick').removeClass('planet-slick-active'); // Remove all active classes initially
    $('#earth-slick').addClass('planet-slick-active');     // Add active class to Earth slick by default

    // Initialize Slick for Earth by default if the screen width is smaller than 992px
    if ($(window).width() < 992) {
        initializeSlick('#earth-slick');
    }

    // Check for window resize to initialize Slick if needed
    $(window).on('resize', function () {
        initSlickOnResize();
    });
});
