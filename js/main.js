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

    // Hide all character info sections initially
    $('.character-info').hide();

    // Click event for selecting a planet
    $('.planet').on('click', function () {
        // Remove active class from all planets
        $('.planet').removeClass('active');
        
        // Add active class to the clicked planet
        $(this).addClass('active');

        // Get the id of the clicked planet (e.g., 'namek', 'saiyan')
        const selectedPlanet = $(this).attr('id');
        
        // Hide all character info sections
        $('.character-info').hide();

        // Show the character info related to the selected planet
        $(`#${selectedPlanet}-character`).fadeIn();

        // Reset the character description section
        $(`#${selectedPlanet}-character .character-name`).text("Name");
        $(`#${selectedPlanet}-character .character-class`).text("Class");
    });

    // Click event for selecting a character
    $('.character-item').on('click', function () {
        // Get the character details from data attributes
        const charName = $(this).data('name');
        const charClass = $(this).data('class');

        // Find the nearest character description container and update it
        const characterInfo = $(this).closest('.character-info');
        characterInfo.find('.character-name').text(`Tên: ${charName}`);
        characterInfo.find('.character-class').text(`Lớp: ${charClass}`);

        // Highlight the selected character item
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
});
