$(document).ready(function () {
    // Progress bar
    const $progressContainer = $('.floating-button');
    const $progressBar = $('.radial-progress');

    // Function to update the radial progress
    function updateRadialProgress() {
        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        const documentHeight = $(document).height();

        // Calculate scroll percentage
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

        // Cap the percentage between 0% and 100%
        const cappedPercent = Math.min(100, Math.max(0, scrollPercent));

        // Update the radial progress using conic-gradient
        $progressBar.css(
            'background',
            `conic-gradient(#00A76F ${cappedPercent}%, #e3e3e3 ${cappedPercent}%)`
        );

        // Show or hide the progress container based on scroll position
        if (cappedPercent > 0) {
            $progressContainer.css('opacity', 1); // Show
        } else {
            $progressContainer.css('opacity', 0); // Hide
        }
    }

    // Update the progress on scroll
    $(window).on('scroll', updateRadialProgress);

    // Smooth scroll to top on button click
    $('.go-top-button').on('click', function (e) {
        e.preventDefault(); // Prevent any default behavior
        $('html, body').scrollTop(0);
    });

    // Hamburger menu
    $('.hamburger').on('click', function (e) {
        e.preventDefault();
        updateHeaderDimensions();
        $(this).toggleClass('active-menu');
        $('.side-menu').toggleClass('side-menu-active');
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.hamburger, .side-menu').length) {
            $('.hamburger').removeClass('active-menu');
            $('.side-menu').removeClass('side-menu-active');
        }
        if (!$(e.target).closest('.notification-container').length) {
            $('.notification-dropdown').addClass('d-none');
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

    // Toggle notification dropdown on bell icon click
    $('.notification-bell').on('click', function (e) {
        e.stopPropagation(); // Prevent event from bubbling up
        $(this).closest('.notification-container').removeClass('has-noti');
        $('.notification-dropdown').toggleClass('d-none');
    });

    // Function to check the input value and toggle the clear button visibility
    function toggleClearButton() {
        if ($('.search-box input').val().length > 0) {
            $('.clear-btn').show(); // Show the clear button if there's text
        } else {
            $('.clear-btn').hide(); // Hide the clear button if the input is empty
        }
    }

    // Clear button toggle for both desktop and mobile
    function toggleClearButton(inputSelector, clearBtnSelector) {
        if ($(inputSelector).val().length > 0) {
            $(clearBtnSelector).show();
        } else {
            $(clearBtnSelector).hide();
        }
    }

    // Handle input events for both search boxes (desktop & mobile)
    $('.search-box input').each(function () {
        const clearBtn = $(this).siblings('.clear-btn');
        toggleClearButton(this, clearBtn); // Initial state check

        $(this).on('input', function () {
            toggleClearButton(this, clearBtn);
        });

        clearBtn.on('click', function () {
            $(this).siblings('input').val('').focus();
            toggleClearButton($(this).siblings('input'), $(this));
        });
    });

    // Search button functionality for both desktop and mobile
    $('.search-btn').on('click', function () {
        const inputField = $(this).siblings('input');
        const query = inputField.val();
        if (query) {
            alert('ohhh my gotto')
        }
    });

    // Cache elements for better performance
    const gridIcon = $('.grid-icon');
    const listIcon = $('.list-icon');
    const blogList = $('.blog-list');

    // Grid View Click Handler
    gridIcon.click(function () {
        // Remove active class from list icon and add to grid icon
        listIcon.removeClass('view-system-active');
        gridIcon.addClass('view-system-active');

        // Switch blog list to grid view
        blogList.removeClass('blog-container-list').addClass('blog-container-grid');
    });

    // List View Click Handler
    listIcon.click(function () {
        // Remove active class from grid icon and add to list icon
        gridIcon.removeClass('view-system-active');
        listIcon.addClass('view-system-active');

        // Switch blog list to list view
        blogList.removeClass('blog-container-grid').addClass('blog-container-list');
    });

    // Custom dropdown
    $('.dropdown-btn').on('click', function () {
        $(this).parent('.custom-dropdown').toggleClass('dropdown-active');
    });

    // Close the dropdown if clicking outside of it
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.custom-dropdown').length) {
            $('.custom-dropdown').removeClass('dropdown-active');
        }
    });
});
