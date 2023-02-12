$(function() {

    let header = $('#header');
    let intro = $('#intro');
    let introHeight = intro.innerHeight();
    let scrollPosition = $(window).scrollTop();

    /* Fixed Header */

    checkScroll(scrollPosition, introHeight);

    $(window).on('scroll resize', function() {
        introHeight = intro.innerHeight();
        scrollPosition = $(this).scrollTop();
        checkScroll(scrollPosition, introHeight);
    });

    function checkScroll(scrollPosition, introHeight) {
        if( scrollPosition > introHeight ) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }


    /* Header Button */
    let headerLinks = $('#headerLinks');
    let headerButton = $('#headerButton');
    let windowWidth = $(window).innerWidth();

    if ( windowWidth <= 1230 ) {
        headerLinks.hide();
    }


    $(window).on('resize', function() {
        windowWidth = $(window).innerWidth();
        if ( windowWidth <= 1230 ) {
            headerLinks.hide();
            headerButton.removeClass('active');
        } else {
            headerLinks.show();
        }
    });

    headerButton.on('click', function(event) {
        event.preventDefault();

        headerLinks.css('opacity', '1').slideToggle(500);
        headerButton.toggleClass('active');

    });



    /* Products Slider https://kenwheeler.github.io/slick/ */
    let productsSlider = $('#productsSlider');

    productsSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        dots: true
    });


    /* Scroll Animation */
    let scrollCenterPosition = scrollPosition + ($(window).height() / 2);

    $('.scroll-text, .scroll-item').each(function() {
        scrollAnimation($(this), scrollCenterPosition);
    });



    $(window).on('scroll', function() {
        scrollCenterPosition = scrollPosition + ($(this).height() / 2);

        $('.scroll-text, .scroll-item').each(function() {
            scrollAnimation($(this), scrollCenterPosition);
        });

    });


    function scrollAnimation(element, scrollCenterPosition) {
        let elementOffset = element.offset().top;
        if(scrollCenterPosition >= elementOffset) {
            element.addClass('scroll-animation');
        }
    }



});
