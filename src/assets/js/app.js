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

    headerButton.on('click', function(event) {
        event.preventDefault();

        header.toggleClass('active');
        headerLinks.toggleClass('show');
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

});
