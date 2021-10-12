$(document).ready(function () {

    // Navbar Sticky top
    navbarSticky();

    // Navbar Sticky top
    $(window).on('scroll', function () {
        navbarSticky();
    });

    // Navbar Sticky top
    function navbarSticky() {

        if ($(window).scrollTop() > 5) {
            $('header').addClass('scrolledDown');
        }
    
        if ($(window).scrollTop() < 5) {
            $('header').removeClass('scrolledDown');
        }
    }

    $('.humberger-icon').click(function(){
        $('.mobile-menu-opened').toggleClass('top-0');
    });

    $('.mobile-menu-opened .close').click(function(){
        $('.mobile-menu-opened').toggleClass('top-0');
    });

    $('#products .card .colors > .color').click(function(){
        
        $(this).toggleClass('active-color');
        
    });


    $('#testimonial_slider').owlCarousel({
        loop: true,
        margin: 10,
        center: true,
        // autoplay:true,
        // autoplayTimeout: 3000,
        // autoplayHoverPause:true,
        items:1,
        responsive:{
            0:{
                stagePadding: 0,
            },
            768:{
                stagePadding: 0,
            },
            1200:{
                stagePadding: 350,
            }
        }
    });

    var owl = $('#testimonial_slider');
    owl.owlCarousel();

    $('#testimonial_prev_arrow').click(function(){
        owl.trigger('owl.prev');
    });

    $('#testimonial_next_arrow').click(function() {
        owl.trigger('owl.next');
    });


});

