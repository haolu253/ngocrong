$(document).ready(function () {
    $('.hamburger').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active-menu');
        $('.side-menu').toggleClass('side-menu-active');
    });

    $(document).on('click', function (e) {
        updateHeaderDimensions();
        if (!$(e.target).closest('.hamburger, .side-menu').length) {
            $('.hamburger').removeClass('active-menu');
            $('.side-menu').removeClass('side-menu-active');
        }
    });

    var resizeTimeout; // Declare resizeTimeout variable

    function updateHeaderDimensions() {
        // Get header logo width on desktop
        var headerLeftWidth = $('.header-left').outerWidth();
        $(':root').css('--header-logo-width', headerLeftWidth + 'px');

        // Get header height
        var headerHeight = $('header').outerHeight();
        $(':root').css('--header-height', headerHeight + 'px');
    }

    // Initial call to set the values
    updateHeaderDimensions();

    // Update on window resize with debounce
    $(window).on('resize', function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function () { // Set the timeout
            updateHeaderDimensions();
        }, 300);
    });
});
