$(document).ready(function () {
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
});
